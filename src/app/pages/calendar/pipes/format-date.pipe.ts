import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true,
  
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const [year, month, date] = value.toString().split('-')
    const newString = [date,month,year].join('-').toString()
    return newString;
  }

}
