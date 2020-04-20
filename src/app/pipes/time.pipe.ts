import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  constructor(){}

  transform(value: any, args: any): any {
    if (!args) {
      return value;
    }

    var date = new Date(value);
    const parsedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();


    return parsedDate;



  }

}
