import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss']
})
export class DetailEmployeeComponent {
  employeeId!: number;
  employee$!: Observable<Employee | undefined>;
  employees: Employee[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id']; // Assuming your route parameter is 'id'
      this.loadEmployeeDetails(this.employeeId);
    });
     const state = history.state;
     console.log(state);
     
    if (state) {
      this.employees = state['employees'];
    } else {
      // Handle case where state is not available
      // Redirect to parent component or display error message
    }
  }

  loadEmployeeDetails(id: number): void {
    this.employee$ = this.employeeService.getEmployeeById(id)
  }
  goBack() {
    console.log(this.employees);
    
    // Pass the stored state back as a query parameter when navigating back
    this.router.navigate(['/employee/main'], { state: { employees: this.employees } });
  }
}
