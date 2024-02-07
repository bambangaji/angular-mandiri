import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ModalComponent } from 'src/app/core/components/modal/modal.component';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-main-employee',
  templateUrl: './main-employee.component.html',
  styleUrls: ['./main-employee.component.scss']
})
export class MainEmployeeComponent {
  @ViewChild('modalRef') modalRef!: ModalComponent;
  private unsubscribe$ = new Subject<void>();
  loading = true;
  employees: Employee[] = [];
  pageSizeOptions: number[] = [10, 20, 30];
  pageSize: number = 10;
  currentPage: number = 1;
  searchQuery: string = '';
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  totalItems: number = 0;
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => {
     const state = history.state;
     console.log(history);
     console.log(state['employees']);
     
      if(state['employees']!==undefined
      ){
        console.log("ss");
        
        this.loading = false;
        this.employees = state['employees'];
        history.replaceState(null, '');
      } else{
        setTimeout(() => {
          this.loadEmployees();
          this.loading = false;
        }, 2000);
      }
    });
   }
  openModal(title:string,content:string) {
    this.modalRef.show(title,content);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  loadEmployees(): void {
    // Fetch employees based on sorting, searching, and paging criteria
    this.employeeService.getEmployees(this.currentPage, this.pageSize, this.searchQuery, this.sortField, this.sortDirection)
      .subscribe(result => {
        console.log(result);

        this.employees = result.employees;
        this.totalItems = result.totalItems;
      });
  }
  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  toAddEmployee(): void {
    this.router.navigate(['/employee/add-employee']);
  }
  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1; // Reset to the first page when changing page size
    this.loadEmployees();
  }


  onSearch(): void {
    this.currentPage = 1;
    this.loadEmployees();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadEmployees();
  }

  onSort(field: string): void {
    console.log(field);
    
    if (field === this.sortField) {
      // Reverse the sort direction if clicking on the same field
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Set the sort field and direction
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.loadEmployees();
  }
  toDetailPage(employeeId:number){
    console.log(this.employees);
    
    this.router.navigate(['/employee/detail-employee', employeeId], { state: { employees: this.employees } });
  }
}
