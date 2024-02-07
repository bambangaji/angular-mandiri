import { Component, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  @ViewChild('picker') picker!: MatDatepicker<Date>;
  employeeForm: FormGroup;
  dateError: boolean = false;
  maxDate: Date = new Date();
  birthDate: string = '';
  selectedValue?: string;
  employee: Employee = {
    id: 0,
    username:'',
    gender:'',
    firstName: '',
    lastName: '',
    email: '',
    birthDate: null,
    basicSalary: null,
    status: '',
    group: null,
    description: null
  };
  constructor(private router:Router,private employeeService:EmployeeService){
    this.employeeForm = new FormGroup({
      username: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthdate: new FormControl('', Validators.required),
      basicSalary: new FormControl('', [Validators.required, this.basicSalaryValidator]),
      status: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      description: new FormControl('',Validators.required)
    });
  }
  isDatePickerVisible = false;
  openPicker(): void {
    this.picker.open();
  }
  toggleDatePicker(): void {
    this.isDatePickerVisible = !this.isDatePickerVisible;
  }
  cancelAddEmployee():void {
    this.router.navigate(['/employee/main']);
  }
  onSubmit(): void {
    console.log(this.employeeForm);
      this.employeeService.saveEmployee(this.employee)
      this.router.navigate(['/employee/main']);
  }
  basicSalaryValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value === 0) {
      return { 'requiredNonZero': true };
    }
    return null;
  }
  dummyData = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10'
  ];

  validateDateFormat(event: any): void {
    this.employee.birthDate=event.value
    const selectedDate = event.value;
    const formattedDate = this.formatDate(selectedDate);
    this.birthDate=formattedDate;
  }
  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}
