import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Emprunt } from "../../models/Emprunt";
import { EmrpruntService } from "../../services/emrprunt.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Employee } from 'src/app/models/Employee';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {
  @Input() employee: Employee = new Employee();
  @Output() updateEmployee = new EventEmitter<Employee>();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const employeeId = this.route.snapshot.params['id'];

    if (employeeId) {
      this.employeeService.getEmployeeById(employeeId).subscribe(
        (data) => {
          this.employee = data;
        }
      );
    }
  }

  update(updatedEmployee: Employee): void {
    const associatedMessage = `The selected`;

    const snackBarRef = this.snackBar.open(associatedMessage, 'Update', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.employeeService.updateEmployee(updatedEmployee).subscribe(
        () => {
          this.showSnackBar('Modification effectuée');
          this.updateEmployee.emit(updatedEmployee);
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Failed to update employee:', error);
          this.showSnackBar('Failed to update employee');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}