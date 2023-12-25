import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationTableComponent } from './components/accommodation-table/accommodation-table.component';
import { AccommodationDetailComponent } from './components/accommodation-table/components/accommodation-detail/accommodation-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StaffMainComponent } from './staff-main/staff-main.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailComponent } from './components/users-table/components/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'staff/accommodation-detail/:id',
    component: AccommodationDetailComponent,
  },
  {
    path: 'staff/user-detail/:id',
    component: UserDetailComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'staff',
    component: StaffMainComponent,
    children: [
      {
        path: 'accommodation-table',
        component: AccommodationTableComponent,
      },
      {
        path: 'user-information',
        component: UsersTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
export const RoutingComponent = [AccommodationTableComponent];
