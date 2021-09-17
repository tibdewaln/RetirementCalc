import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { CorpusComponent } from './corpus/corpus.component';
import { InvestmentComponent } from './investment/investment.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CorpusComponent,
    ExpenseComponent,
    InvestmentComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
