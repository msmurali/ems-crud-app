import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private empService: EmployeeService) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getEmployees().subscribe({
      next: (data) => {
        for (let i = 0; i < data.length; i++) {
          let elem = data[i];
          this.employees.push({
            id: elem.payload.doc.id,
            ...(elem.payload.doc.data() as Employee),
          } as Employee);
        }
      },
      error: (err) => console.log(err),
    });
  }
}
