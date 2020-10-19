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

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent,
    EmployeesComponent,
    EmployeedetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
