import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroToUsd'
})
export class EuroToUsdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
