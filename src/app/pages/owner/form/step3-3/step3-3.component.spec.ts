import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step33Component } from './step3-3.component';

describe('Step33Component', () => {
  let component: Step33Component;
  let fixture: ComponentFixture<Step33Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step33Component]
    });
    fixture = TestBed.createComponent(Step33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
