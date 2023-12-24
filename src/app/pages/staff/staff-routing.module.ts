import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';
import { AccommodationDetailComponent } from './components/accommodation-table/components/accommodation-detail/accommodation-detail.component';

const routes: Routes = [
  {path: "staff/components/accommodation-table",
  component: AccommodationTableComponent},
  {
    path: "staff/accommodation-detail/:id",
    component: AccommodationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
