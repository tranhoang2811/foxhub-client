import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step25Component } from './step2-5.component';

describe('Step25Component', () => {
  let component: Step25Component;
  let fixture: ComponentFixture<Step25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step25Component]
    });
    fixture = TestBed.createComponent(Step25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
