import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private data: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>(
    []
  );

  loadData(data: Employee[]) {
    this.data.next(data);
  }

  getData() {
    return this.data.asObservable();
  }
}
