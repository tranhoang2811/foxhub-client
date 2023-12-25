import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStepTwoComponent } from './footer-step-two.component';

describe('FooterStepTwoComponent', () => {
  let component: FooterStepTwoComponent;
  let fixture: ComponentFixture<FooterStepTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStepTwoComponent]
    });
    fixture = TestBed.createComponent(FooterStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
