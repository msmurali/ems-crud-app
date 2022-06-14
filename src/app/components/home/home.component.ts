import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => (this.employees = data));
  }
}
