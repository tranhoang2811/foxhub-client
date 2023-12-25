import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step34Component } from './step3-4.component';

describe('Step34Component', () => {
  let component: Step34Component;
  let fixture: ComponentFixture<Step34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step34Component]
    });
    fixture = TestBed.createComponent(Step34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
