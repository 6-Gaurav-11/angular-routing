import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/department-list', pathMatch: 'full'}, //redirect if full url is empty
  {path: 'department-list', component: DepartmentListComponent},
  {
    path: 'department-list/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}   //should be place at bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent,
                                  EmployeeListComponent, 
                                  PageNotFoundComponent, 
                                  DepartmentDetailComponent,
                                  DepartmentContactComponent,
                                  DepartmentOverviewComponent
                                ];
