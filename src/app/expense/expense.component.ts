import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  monthlyExpense : number = 0;
  yearlyExpense : number = 0;
  inflationRate : number = 0;
  currentAge : number = 0;
  retirement : number = 0;
  yrsOfRetirement : number = 0;
  annualExpense : number = 0;
  constructor() { }

  ngOnInit(): void {
    this.yrsOfRetirement = this.retirement - this.currentAge;
  }

  onExpenseChange(){
    this.yearlyExpense = this.monthlyExpense * 12;
  }

  onCurrentAgeChange()
  {
    this.yrsOfRetirement = this.retirement - this.currentAge;
  }

  onRetirementAgeChange()
  {
    this.yrsOfRetirement = this.retirement - this.currentAge;
  }

  calculateExpense()
  {
    // console.log(form.value);
    let rate = this.inflationRate * Math.pow(10, -2);
    this.annualExpense = Math.pow((1 + rate), this.yrsOfRetirement) * this.yearlyExpense;
    this.annualExpense = Math.round(this.annualExpense);
  }
}
