import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConverterCurrencyComponent} from './converter-currency/converter-currency.component'

const routes: Routes = [
  { path: '', component: ConverterCurrencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
