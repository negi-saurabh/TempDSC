import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinLooComponent } from './checkin-loo.component';

describe('CheckinLooComponent', () => {
  let component: CheckinLooComponent;
  let fixture: ComponentFixture<CheckinLooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinLooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinLooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
