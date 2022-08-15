import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {

  Employee:any = [];
  constructor(private employeeService: EmployeeService) { 
    this.readEmployee();
  }
  ngOnInit() {}
  readEmployee(){
    this.employeeService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }
  removeEmployee(employee: { _id: any; }, index: any) {
    if(window.confirm('Are you sure?')) {
        this.employeeService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

}
