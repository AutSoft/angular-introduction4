import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from './user.model';
import {LoginResponse} from './login-response.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = `${environment.api}/SziaUsers`;
  currentUser = new BehaviorSubject<User>(undefined);

  constructor(private http: HttpClient) {
    if (this.isValidTokenPresent()) {
      this.currentUser.next(JSON.parse(localStorage.getItem(environment.userKey)));
    } else {
      this.clearLocalStorage();
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser.getValue() !== undefined;
  }

  logIn(username: string, password: string) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, {username, password}).pipe(mergeMap(response => {
      this.storeTokenAndValidity(response);
      return this.loadUserProfile(response.userId);
    }));
  }

  logOut() {
    return this.http.post(`${this.baseUrl}/logout`, null)
      .pipe(map(() => {
        this.clearLocalStorage();
        this.currentUser.next(undefined);
      }));
  }

  private clearLocalStorage() {
    localStorage.removeItem(environment.tokenKey);
    localStorage.removeItem(environment.tokenValidityEndKey);
    localStorage.removeItem(environment.userKey);
  }

  private loadUserProfile(userId: number) {
    return this.http.get<User>(`${this.baseUrl}/${userId}`)
      .pipe(map(currentUser => {
        localStorage.setItem(environment.userKey, JSON.stringify(currentUser));
        this.currentUser.next(currentUser);
      }));
  }

  private isValidTokenPresent() {
    const tokenValidityEnd = Number(localStorage.getItem(environment.tokenValidityEndKey));
    return  tokenValidityEnd >= new Date().getMilliseconds();
  }

  private storeTokenAndValidity(response: LoginResponse) {
    localStorage.setItem(environment.tokenKey, response.id);
    const tokenValidityEnd = new Date(response.created).getMilliseconds() + response.ttl * 1000;
    localStorage.setItem(environment.tokenValidityEndKey, tokenValidityEnd.toString());
  }
}
