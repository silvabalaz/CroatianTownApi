import {Pipe, PipeTransform} from '@angular/core';
import {Community} from './croatia';


@Pipe({
  name: 'filterpipecommunity'
})
export class FilterPipeCommunity implements PipeTransform {
  transform(communities: Community[], input: any): any {
    if (!communities || !input) {
      return communities;
    }
    let id = communities.filter(items => items.ID === input);
    let name = communities.filter(items => items.name === input);
    let entityType = communities.filter(items => items.entityType === input);
    if( id ) {
      return id;
    } else if ( name ) {
      return name;
    } else if ( entityType ) {
      return entityType;
    }
  }
}
