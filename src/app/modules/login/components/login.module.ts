import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/components/shared.module';
import { MainLoginComponent } from './main-login/main-login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MainLoginComponent, RegisterComponent],
    imports: [SharedModule,CommonModule,FormsModule ]
})
export class LoginModule { }
