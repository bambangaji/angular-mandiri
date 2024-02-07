import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  constructor() {
    // Generate 100 dummy employees for testing
    for (let i = 1; i <= 100; i++) {
      var status = 'InActive';
      var gender = 'Male';
      if(i%2==0){
        status ='Active';
        gender = 'Female'
      }
      this.employees.push({
        id:i,
        username: `user${i}`,
        firstName: `user${i}`,
        lastName: 'Doe',
        email: `john.doe@example.com${i}`,
        birthDate: new Date(1990, 0, 1),
        basicSalary: 50000,
        status: status,
        group: 'Engineering',
        description: 'Senior Developer',
        gender:gender
        // Add other properties as needed
      });
    }
  }
  saveEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log('Employee saved:', employee);
  }

  getEmployees(
    page: number,
    pageSize: number,
    searchQuery: string,
    sortField: string,
    sortDirection: 'asc' | 'desc'
  ): Observable<{ employees: Employee[]; totalItems: number }> {
    // Apply sorting and searching logic here
    let filteredEmployees = this.employees;

    if (searchQuery) {
      searchQuery = searchQuery.toLowerCase();
      filteredEmployees = filteredEmployees.filter(employee =>
        employee.firstName.toLowerCase().includes(searchQuery) ||
        employee.lastName.toLowerCase().includes(searchQuery) ||
        employee.email.toLowerCase().includes(searchQuery)
      );
    }

    if (sortField) {
      filteredEmployees = this.sortEmployees(filteredEmployees, sortField, sortDirection);
    }

    // Apply pagination logic
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);
    console.log("employess");
    console.log(this.employees.length);
    
    
    // Return an object containing paginated employees and total count
    return of({
      employees: paginatedEmployees,
      totalItems: this.employees.length // Total count includes all filtered employees
    });
  }

  private sortEmployees(employees: Employee[], field: string, direction: 'asc' | 'desc'): Employee[] {
    // Sort employees based on the specified field and direction
    return employees.sort((a, b) => {
      const valueA = this.getFieldValue(a, field);
      const valueB = this.getFieldValue(b, field);

      if (direction === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }

  
  private getFieldValue(employee: Employee, field: string): string {
    // Helper function to get the field value for sorting
    switch (field) {
      case 'firstName':
        return employee.firstName;
      case 'lastName':
        return employee.lastName;
      case 'email':
        return employee.email;
      case 'gender':
        return employee.gender;
      case 'status':
        return employee.status;
      default:
        return ''; // Default to empty string for unknown fields
    }
  }
  getTotalEmployeesCount(): Observable<number> {
    // Implement the logic to get the total count of employees
    // In a real application, this might involve making a request to your backend API
    return of(this.employees.length); // Replace this with the actual total count logic
  }
  getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee);
  }
}
