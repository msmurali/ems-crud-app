import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  constructor(private router: Router, private empService: EmployeeService) {}

  @Input() employee: Employee;

  navigateTo() {
    this.router.navigateByUrl(`/update/${this.employee.id}`);
  }

  removeEmployee() {
    this.empService
      .removeEmployee(this.employee)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
