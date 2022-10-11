import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEuro'
})
export class UsdToEuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let taux = 1.1;

    return value / taux;
  }
}
