import {Pipe, PipeTransform} from '@angular/core';
import {Town} from './croatia';


@Pipe({
  name: 'filterpipetown'
})
export class FilterPipeTown implements PipeTransform {
  transform(town: Town[], id: number): Town[] {
    if (!town || !id) {
      return town;
    }
    return town.filter(items => items.ID === id);
  }
}
