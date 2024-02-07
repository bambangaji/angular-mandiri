import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employee } from './models/employee.model';
import { routesEmployee } from './modules/employee/components/employee-routing.module';
import { EmployeeComponent } from './modules/employee/components/employee.component';
import { MainLoginComponent } from './modules/login/components/main-login/main-login.component';
import { RegisterComponent } from './modules/login/components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: MainLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employee', children: [ 
    ...routesEmployee
] },
  // Other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
