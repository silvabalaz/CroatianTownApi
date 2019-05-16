import {Pipe, PipeTransform} from '@angular/core';
import {County} from './croatia';


@Pipe({
  name: 'filterpipecounty'
})
export class FilterPipeCounty implements PipeTransform {
  transform(counties: County[], id: number): County[] {
    if (!counties || !id) {
      return counties;
    }
    return counties.filter(items => items.ID === id);
  }
}
