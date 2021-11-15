import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ApplyLoanComponent } from './employee/apply-loan/apply-loan.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'apply-loan', component: ApplyLoanComponent },
  { path: 'create', component: CreateEmployeeComponent, canActivate: [AuthGuard]  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
