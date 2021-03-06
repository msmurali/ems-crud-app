import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private firestore: AngularFirestore) {}

  getEmployees() {
    return this.firestore.collection('emp-collection').snapshotChanges();
  }

  getEmployee(id: string) {
    return this.firestore
      .collection<Employee>('emp-collection')
      .doc(id)
      .valueChanges();
  }

  addEmployee(employee: Employee) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('emp-collection')
        .add(employee)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  updateEmployee(id: string, employee: Employee) {
    return this.firestore.collection('emp-collection').doc(id).update(employee);
  }

  removeEmployee(employee: Employee) {
    return this.firestore
      .collection('emp-collection')
      .doc(employee.id)
      .delete();
  }
}
