import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step32Component } from './step3-2.component';

describe('Step32Component', () => {
  let component: Step32Component;
  let fixture: ComponentFixture<Step32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step32Component]
    });
    fixture = TestBed.createComponent(Step32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
