import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/Model/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  submitted = false;
  editForm!: FormGroup;
  employeeData!: Employee[];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      username: ['', [Validators.required,Validators.minLength(6)]],
      Department: ['', [Validators.required]],
      password : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$#!%*?&])[A-Za-z\d$@#$!%*?&].{8,}')]],
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }
  getEmployee(id: string | null) {
    this.employeeService.getEmployee(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        Department: data['Department'],
        username: data['username'],
        password:data['password'],
      });
    });
  }
  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      username: ['', [Validators.required,Validators.minLength(6)]],
      Department: ['', [Validators.required]],
      password : ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%#*?&])[A-Za-z\d$@$!%#*?&].{8,}')]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } 
    else 
    {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.employeeService.updateEmployee(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/employeeShow');
            console.log('Content updated successfully!');
            return true;
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }

}
