import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  employee: Employee = {
    name: 'Mark Jacob',
    branch: 'london',
    age: 24,
    salary: 50000,
    status: 'ACTIVE',
    joinedDate: new Date(),
    role: 'MANAGER',
    photoURL: 'https://i.pravatar.cc/100',
  };
}
