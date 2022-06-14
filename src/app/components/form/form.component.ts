import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  form: FormGroup;
  action: String;
  id: String | undefined;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(20), Validators.max(60)]],
      branch: ['', [Validators.required, Validators.minLength(3)]],
      salary: ['', Validators.required],
      photoURL: [
        '',
        [
          Validators.required,
          Validators.pattern(
            new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
          ),
        ],
      ],
      role: ['', Validators.required],
      status: ['', Validators.required],
      joinedDate: ['', Validators.required],
    });

    this.route.url.subscribe((url) => (this.action = url[0].path));

    this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
  }

  get name() {
    return this.form.get('name');
  }
  get age() {
    return this.form.get('age');
  }
  get branch() {
    return this.form.get('branch');
  }
  get salary() {
    return this.form.get('salary');
  }
  get status() {
    return this.form.get('status');
  }
  get role() {
    return this.form.get('role');
  }
  get photoURL() {
    return this.form.get('photoURL');
  }
  get joinedDate() {
    return this.form.get('joinedDate');
  }

  create() {
    if (this.form.valid) {
      this.empService
        .addEmployee(this.form.value as Employee)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }
}
