import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private empService: EmployeeService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.empService.getEmployees().subscribe({
      next: (data) => {
        let employees: Employee[] = [];
        for (let i = 0; i < data.length; i++) {
          let elem = data[i];
          employees.push({
            id: elem.payload.doc.id,
            ...(elem.payload.doc.data() as Employee),
          } as Employee);
        }
        this.sharedService.loadData(employees);
      },
      error: (err) => console.log(err),
    });
  }
}
