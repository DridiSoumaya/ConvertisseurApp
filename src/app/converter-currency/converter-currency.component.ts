import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { EuroToUsdPipe } from '../pipes/euro-to-usd.pipe';
import { UsdToEuroPipe } from '../pipes/usd-to-euro.pipe';


@Component({
  selector: 'app-converter-currency',
  templateUrl: './converter-currency.component.html',
  styleUrls: ['./converter-currency.component.css'],
  providers: [EuroToUsdPipe, UsdToEuroPipe]
})

export class ConverterCurrencyComponent implements OnInit {
  @ViewChild("mySpan", { static: false })
  mySpanRef!: ElementRef;
  public montant = 0;
  public taux: any = 1.1;
  currencyForm: FormGroup;
  labelCurrency: string = "EUR";
  public SecondlabelCurrency: string = "USD";
  ListCurrency = ['EUR', 'USD'];
  isEUR = true;
  isUsd = false;
  currencyVal: number = 0;
  tauxChange: string = '';
  storageKey: string = 'form-data';
  data: any = [];
  sArray: any = [];
  items: any;
  CurrencyList: any = [];
  spanValue: number = 0;
  constructor(private fb: FormBuilder, private euroToUsdPipe: EuroToUsdPipe, private usdToEuroPipe: UsdToEuroPipe) {
    this.currencyForm = fb.group({
      currencyControl: new FormControl(this.ListCurrency[0]),
      taux: new FormControl(1.1),
      montant: new FormControl(0),
      currencyVal: new FormControl(0),
      tauxChange: new FormControl('0')
    });
  }
  ngOnInit() {
    // this.saveCurrency()
  }
  onChange(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.labelCurrency = (<HTMLInputElement>event.target).value
    this.saveCurrency();
    if (this.labelCurrency == 'EUR') {
      this.SecondlabelCurrency = 'USD';
      this.isEUR = true;
      this.isUsd = false;
      if (this.montant !== 0) {
        this.montant = this.usdToEuroPipe.transform(this.currencyVal)

      }
      console.log('taux' + this.currencyForm.get('currencyVal')?.value)
    }
    else {
      this.SecondlabelCurrency = 'EUR';
      this.isUsd = true;
      this.isEUR = false;
      this.currencyVal = this.usdToEuroPipe.transform(this.montant)
    }

  }
  onChangeTaux(event: Event) {
    this.tauxChange = (<HTMLInputElement>event.target).value;
    console.log('taux' + this.tauxChange)
  }
  onChangeCurrency(event: Event) {
    let valCurrency = (<HTMLInputElement>event.target).value
    if (valCurrency != null && valCurrency != '0') {
      this.saveCurrency();
    }

  }
  saveCurrency(): void {
    this.sArray = localStorage.setItem('form-data', JSON.stringify(this.currencyForm.value));
    this.items = JSON.parse(localStorage.getItem(this.storageKey) || 'LocaL storage is empty');
    this.CurrencyList.push(this.items);
    this.CurrencyList;
  }



}
