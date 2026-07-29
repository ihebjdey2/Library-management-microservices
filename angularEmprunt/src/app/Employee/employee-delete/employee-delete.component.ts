import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.deleteById(id).subscribe(
        () => {
          alert('Employee deleted successfully');
        },
        (error) => {
          console.error('Failed to delete employee:', error);
          alert('Failed to delete employee');
        }
      );
    }
  }
}