import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStepOneComponent } from './footer-step-one.component';

describe('FooterStepOneComponent', () => {
  let component: FooterStepOneComponent;
  let fixture: ComponentFixture<FooterStepOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStepOneComponent]
    });
    fixture = TestBed.createComponent(FooterStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
