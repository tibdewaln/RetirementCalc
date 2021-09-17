import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorpusComponent } from './corpus/corpus.component';
import { ExpenseComponent } from './expense/expense.component';
import { InvestmentComponent } from './investment/investment.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component: ExpenseComponent},
  {path:"corpus/:expense/:age/:yrs/:rate", component: CorpusComponent},
  {path:"investment/:yrs/:corpus", component: InvestmentComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
