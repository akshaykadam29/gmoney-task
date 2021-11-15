import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  applyLoanForm: FormGroup;
  initialPrinciple: number = 0;
  staticRoi: number = 12;
  duration: number;
  totalInterestAmount: number;
  totalPayableAmount: number;
  perMonthEmi: number;

  updateSetting(event) {
    this.initialPrinciple = event.value;
  }

  constructor() { }

  ngOnInit(): void {
    this.applyLoanForm = new FormGroup({
      principleInput: new FormControl(null, {validators: [Validators.required]}),
      rateOfInterest: new FormControl(12, { validators: [Validators.required]}),
      duration: new FormControl(null, { validators: [Validators.required]}),
    });
  }

  onApplyLoan(){
    if(this.applyLoanForm.invalid){
      return
    }
    let principleAmount = this.applyLoanForm.value.principleInput;
    this.duration = this.applyLoanForm.value.duration;
    const interest = 12 / 100;
    const daysIntoYrs = this.duration / 365;
    this.totalInterestAmount = Math.round(principleAmount * interest * daysIntoYrs);
    this.totalPayableAmount = Math.round(principleAmount + this.totalInterestAmount);
  }

}
