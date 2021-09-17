import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corpus',
  templateUrl: './corpus.component.html',
  styleUrls: ['./corpus.component.css']
})
export class CorpusComponent implements OnInit {
  expense : number = 0;
  lifeExpentency : number = 0;
  expectedRetirement : number = 0;
  yrsOfRetire : number = 0;
  rateOfReturnAfterRetire : number = 0;
  inflationAdjustedReturn : number = 0;
  inflateReturnRate : number = 0;
  corpusAmount : number = 0;
  noOfYrsToRetire : number = 0;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.expense = Number(this.route.snapshot.paramMap.get('expense'));
    this.expectedRetirement = Number(this.route.snapshot.paramMap.get('age'));
    this.inflateReturnRate = Number(this.route.snapshot.paramMap.get('rate'));
    this.noOfYrsToRetire = Number(this.route.snapshot.paramMap.get('yrs'));
  }

  onAgeChange()
  {
    this.yrsOfRetire = this.lifeExpentency - this.expectedRetirement;
  }

  calculateCorpus()
  {
    // console.log("hello");
    this.inflationAdjustedReturn = (((1 + this.rateOfReturnAfterRetire)/(1 + this.inflateReturnRate)) - 1) * 100;
    this.corpusAmount = (this.expense) * (this.yrsOfRetire) * (this.inflationAdjustedReturn);
    // console.log("hello" + this.inflationAdjustedReturn + " " + this.corpusAmount);
  }

}
