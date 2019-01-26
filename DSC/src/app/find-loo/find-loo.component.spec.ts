import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLooComponent } from './find-loo.component';

describe('FindLooComponent', () => {
  let component: FindLooComponent;
  let fixture: ComponentFixture<FindLooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
