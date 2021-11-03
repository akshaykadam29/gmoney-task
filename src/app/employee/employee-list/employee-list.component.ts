import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any = [];
  private employeeSub: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getAllEmployess();
    this.employeeSub = this.employeeService.getEmployeeUpdateListener()
      .subscribe((employeeData: { employees: any[] }) => {
        this.employees = employeeData.employees;
      })
  }

}
