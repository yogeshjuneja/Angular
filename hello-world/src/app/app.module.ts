import { EnrollmentService } from './Services/enrollment.service';
import { RouterModule } from '@angular/router';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { EmployeeserviceService } from './employeeservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponent } from './test/test.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ChidrouteComponent } from './chidroute/chidroute.component';
import { TdfformsComponent } from './tdfforms/tdfforms.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent,
    EmployeesComponent,
    EmployeedetailsComponent,
    ErrorcomponentComponent,
    HomepageComponent,
    ChidrouteComponent,
    TdfformsComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, RouterModule],
  providers: [EmployeeserviceService, EnrollmentService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
