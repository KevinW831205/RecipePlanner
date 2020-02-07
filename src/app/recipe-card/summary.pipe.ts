import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    if (!value) {
      return null;
    } else {
      let actualLimit = (limit) ? limit : 75;

      let result = value.substr(0, actualLimit)

      result += (value.length > actualLimit) ? "..." : ""

      return result;

    }
  }

}
