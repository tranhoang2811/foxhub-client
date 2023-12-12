import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';

const routes: Routes = [
  {path: "staff/components/accomodationtable",
  component: AccommodationTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
