import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStepThreeComponent } from './footer-step-three.component';

describe('FooterStepThreeComponent', () => {
  let component: FooterStepThreeComponent;
  let fixture: ComponentFixture<FooterStepThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStepThreeComponent]
    });
    fixture = TestBed.createComponent(FooterStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
