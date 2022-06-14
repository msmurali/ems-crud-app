import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employees: Employee[];

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.getData().subscribe((data) => (this.employees = data));
  }

  navigateTo() {
    this.router.navigateByUrl('/create');
  }
}
