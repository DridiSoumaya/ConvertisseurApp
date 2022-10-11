import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterCurrencyComponent } from './converter-currency/converter-currency.component';
import { UsdToEuroPipe } from './pipes/usd-to-euro.pipe';
import { EuroToUsdPipe } from './pipes/euro-to-usd.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConverterCurrencyComponent,
    UsdToEuroPipe,
    EuroToUsdPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
