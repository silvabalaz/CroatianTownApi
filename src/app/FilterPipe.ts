import {Pipe, PipeTransform} from '@angular/core';
import {County} from './croatia';


@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {
  transform(counties: County[], id: number): County[] {
    if (!counties || !id) {
      return counties;
    }
    return counties.filter(items => items.ID === id);
  }
}
