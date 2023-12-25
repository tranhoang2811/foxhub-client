import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './home/components/post-list/post-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './form/components/header/header.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { Step11Component } from './form/step1-1/step1-1.component';
import { Step12Component } from './form/step1-2/step1-2.component';
import { Step13Component } from './form/step1-3/step1-3.component';
import { Step21Component } from './form/step2-1/step2-1.component';
import { Step22Component } from './form/step2-2/step2-2.component';
import { Step23Component } from './form/step2-3/step2-3.component';
import { Step24Component } from './form/step2-4/step2-4.component';
import { Step31Component } from './form/step3-1/step3-1.component';
import { Step32Component } from './form/step3-2/step3-2.component';
import { Step33Component } from './form/step3-3/step3-3.component';
import { Step34Component } from './form/step3-4/step3-4.component';
import { Step25Component } from './form/step2-5/step2-5.component';
import { FooterStepOneComponent } from './form/components/footer-step-one/footer-step-one.component';
import { FooterStepTwoComponent } from './form/components/footer-step-two/footer-step-two.component';
import { FooterStepThreeComponent } from './form/components/footer-step-three/footer-step-three.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostListComponent,
    SidebarComponent,
    HeaderComponent,
    PostDetailComponent,
    Step11Component,
    Step12Component,
    Step13Component,
    Step21Component,
    Step22Component,
    Step23Component,
    Step24Component,
    Step31Component,
    Step32Component,
    Step33Component,
    Step34Component,
    Step25Component,
    FooterStepOneComponent,
    FooterStepTwoComponent,
    FooterStepThreeComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
