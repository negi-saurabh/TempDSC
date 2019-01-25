import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LooComponent } from './loo.component';

describe('LooComponent', () => {
  let component: LooComponent;
  let fixture: ComponentFixture<LooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
