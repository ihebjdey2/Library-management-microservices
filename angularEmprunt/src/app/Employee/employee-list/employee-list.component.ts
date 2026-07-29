import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedEmployees: Employee[] = [];
  employees: Employee[] = [];
  search = '';
  selectedEmployee!: Employee;
  show = false;

  constructor(private employeeService: EmployeeService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.employeeService.findAll().subscribe((data) => {
      this.employees = data;
      this.displayedEmployees = data; // Assign the data to displayedEmployees as well
    });
  }

  deleteEmployee(id: number): void {
    const snackBarRef = this.snackBar.open(
      'Are you sure you want to delete this employee?',
      'Delete',
      {
        duration: 5000,
      }
    );

    snackBarRef.onAction().subscribe(() => {
      this.employeeService.deleteById(id).subscribe(
        () => {
          console.log('Employee deleted successfully');
          this.employees = this.employees.filter((employee) => employee.employeeId !== id);
          this.displayedEmployees = this.employees.slice(); // Update displayedEmployees as well
          console.log('displayedEmployees after deletion:', this.displayedEmployees);
          this.showSnackBar('Employee deleted successfully');
        },
        (error) => {
          console.error('Failed to delete employee:', error);
          console.log('Error status:', error.status);
          console.log('Error body:', error.error);
          this.showSnackBar('Failed to delete employee');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  updateEmployee(employee: Employee) {
    console.log('Selected employee:', employee);
    this.selectedEmployee = employee;
    this.show = true;
  }

  changeTab(event: any) {
    this.show = false;
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].employeeId === event.id) {
        this.employees[i] = event;
      }
    }
  }
}