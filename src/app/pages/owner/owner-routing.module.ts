import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './home/components/post-list/post-list.component';
import { HomeComponent } from './home/home.component';
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

const routes: Routes = [
  {
    path: 'owner/home',
    component: HomeComponent,
  },
  {
    path: 'owner/post/6583f50de10537268dcd2f3b',
    component: PostDetailComponent,
  },
  {
    path: 'owner/post/add/step1-1',
    component: Step11Component,
  },
  {
    path: 'owner/post/add/step1-2',
    component: Step12Component,
  },
  {
    path: 'owner/post/add/step1-3',
    component: Step13Component,
  },
  {
    path: 'owner/post/add/step2-1',
    component: Step21Component,
  },
  {
    path: 'owner/post/add/step2-2',
    component: Step22Component,
  },
  {
    path: 'owner/post/add/step2-3',
    component: Step23Component,
  },
  {
    path: 'owner/post/add/step2-4',
    component: Step24Component,
  },
  {
    path: 'owner/post/add/step2-5',
    component: Step25Component,
  },
  {
    path: 'owner/post/add/step3-1',
    component: Step31Component,
  },
  {
    path: 'owner/post/add/step3-2',
    component: Step32Component,
  },
  {
    path: 'owner/post/add/step3-3',
    component: Step33Component,
  },
  {
    path: 'owner/post/add/step3-4',
    component: Step34Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
