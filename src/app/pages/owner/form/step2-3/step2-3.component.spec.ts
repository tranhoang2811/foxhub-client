import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step23Component } from './step2-3.component';

describe('Step23Component', () => {
  let component: Step23Component;
  let fixture: ComponentFixture<Step23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step23Component]
    });
    fixture = TestBed.createComponent(Step23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
