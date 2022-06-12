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

  employees: Employee[];

  ngOnInit(): void {
    this.empService.getEmployees().subscribe({
      next: (data) =>
        data.map((e) => {
          console.log({
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Employee),
          });
        }),
      error: (err) => console.log(err),
    });
  }
}
