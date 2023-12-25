import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step24Component } from './step2-4.component';

describe('Step24Component', () => {
  let component: Step24Component;
  let fixture: ComponentFixture<Step24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step24Component]
    });
    fixture = TestBed.createComponent(Step24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
