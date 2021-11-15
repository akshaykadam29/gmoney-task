import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: any = [];
  private employeeUpdate = new Subject<{employees: any[]}>()

  constructor(private http: HttpClient, private router: Router) { }

  addEmployee(name: string, gender: string, age: number){
    const employee = { name: name, gender: gender, age: age };
    this.http.post<{message: string}>('http://localhost:3000/api/employee', employee)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.router.navigate(['/']);
      });
  }

  getEmployeeUpdateListener(){
    return this.employeeUpdate.asObservable();
  }

  getAllEmployess(){
    this.http.get<{result: any}>('http://localhost:3000/api/employee')
      .subscribe(response => {
        // console.log(response);
        this.employees = response.result;
        // console.log(this.employees);
        this.employeeUpdate.next({employees: [...this.employees]});
      })
  }
}
