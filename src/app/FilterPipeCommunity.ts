import {Pipe, PipeTransform} from '@angular/core';
import {Community} from './croatia';


@Pipe({
  name: 'filterpipecommunity'
})
export class FilterPipe implements PipeTransform {
  transform(communities: Community[], id: number): Community[] {
    if (!communities || !id) {
      return communities;
    }
    return communities.filter(items => items.ID === id);
  }
}
