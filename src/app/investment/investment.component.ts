import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  corpusAmount : number = 0;
  roi : number = 0;
  noOfYrs : number = 0;
  monthlyInvestments : number = 0;


  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.corpusAmount = Number(this.route.snapshot.paramMap.get('corpus'));
    this.noOfYrs = Number(this.route.snapshot.paramMap.get('yrs'));
  }

  calculateMonthlyInvestments()
  {
    let months = this.noOfYrs * 12;
    // this.monthlyInvestments = this.corpusAmount * this.roi * (Math.pow((1 + this.roi), months)/Math.pow((1 + this.roi), (months - 1)));
    this.monthlyInvestments = this.corpusAmount * this.roi * (1 + this.roi);
    console.log(this.corpusAmount + " " + this.roi + " " + months + " " +this.monthlyInvestments);
  }





}
