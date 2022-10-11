import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroToUsd'
})
export class EuroToUsdPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let taux = 1.1;
    // function entierAleatoire(min: number = -0.05, max: number = 0.05) {
    //   var aleoTaux = Math.floor(Math.random() * (max - min + 1)) + min;
    //     //setTimeout(() => aleoTaux + taux, 3000);
    //   //Math.floor(Math.random() * (max - min + 1) + min);
    //   return aleoTaux;
    // }
    var min =  -0.05;
    var max =  0.05;
    let aleoTaux = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => aleoTaux + taux, 3000);
    console.log("time",setTimeout(() => aleoTaux + taux, 3000));
    return value * (aleoTaux + taux);
  }

}

