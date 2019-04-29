import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FligthsListComponent } from './fligths-list.component';

describe('FligthsListComponent', () => {
  let component: FligthsListComponent;
  let fixture: ComponentFixture<FligthsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FligthsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FligthsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
