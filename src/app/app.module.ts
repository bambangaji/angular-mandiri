import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule,} from './modules/employee/components/employee.module';
import { LoginModule } from './modules/login/components/login.module';
import { NgSelectModule } from '@ng-select/ng-select';  
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomCurrencyPipe } from './core/pipe/custom-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    LoginModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule 
     // Import SharedModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
