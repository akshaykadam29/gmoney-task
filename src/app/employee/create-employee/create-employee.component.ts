import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  genderValues: string[] = ['Male', 'Female'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      gender: new FormControl(null, { validators: [Validators.required]}),
      age: new FormControl(null, { validators: [Validators.required]})
    });
  }

  onSaveEmployee(){
    if(this.employeeForm.invalid){
      return
    }
    this.employeeService.addEmployee(
      this.employeeForm.value.name,
      this.employeeForm.value.gender,
      this.employeeForm.value.age,
    )
  }

}
