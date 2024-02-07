import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeComponent } from './employee.component';
import { MainEmployeeComponent } from './main-employee/main-employee.component';

export const routesEmployee: Routes = [
    { 
      path: '', 
      component: EmployeeComponent,
      children: [
        { path: 'add-employee', component: AddEmployeeComponent },
        { path: 'main', component: MainEmployeeComponent },
        { path: 'detail-employee/:id', component: DetailEmployeeComponent },
        { path: '', redirectTo: 'main', pathMatch: 'full' } // Redirect to 'main' when navigating to 'employee'
      ]
    }
];
