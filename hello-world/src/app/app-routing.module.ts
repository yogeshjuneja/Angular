import { ChidrouteComponent } from './chidroute/chidroute.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';
import { EmployeesComponent } from './employees/employees.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { constants } from 'buffer';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: EmployeedetailsComponent },
  { path: 'employeelist', component: EmployeedetailsComponent },
  { path: 'page-not-found', component: ErrorcomponentComponent },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      {
        path: 'childroute', component: ChidrouteComponent

      }

    ]
  },
  {
    path: 'employee-detail/:id',
    component: EmployeedetailsComponent

  },
  { path: 'practice', component: TestComponent },
  { path: 'home', component: HomepageComponent },
  { path: '**', component: ErrorcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

