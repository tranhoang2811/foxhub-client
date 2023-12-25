import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step13Component } from './step1-3.component';

describe('Step13Component', () => {
  let component: Step13Component;
  let fixture: ComponentFixture<Step13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step13Component]
    });
    fixture = TestBed.createComponent(Step13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
