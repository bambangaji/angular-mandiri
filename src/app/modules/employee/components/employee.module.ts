import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/components/shared.module';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MainEmployeeComponent } from './main-employee/main-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomCurrencyPipe } from 'src/app/core/pipe/custom-currency.pipe';

@NgModule({
    declarations: [DetailEmployeeComponent, AddEmployeeComponent, MainEmployeeComponent,EmployeeComponent,CustomCurrencyPipe],
    imports: [SharedModule,CommonModule,FormsModule,AppRoutingModule ]
})
export class EmployeeModule { }
