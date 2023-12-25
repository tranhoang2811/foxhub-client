import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step22Component } from './step2-2.component';

describe('Step22Component', () => {
  let component: Step22Component;
  let fixture: ComponentFixture<Step22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step22Component]
    });
    fixture = TestBed.createComponent(Step22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
