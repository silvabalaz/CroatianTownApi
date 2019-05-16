import {Pipe, PipeTransform} from '@angular/core';
import {County} from './croatia';


@Pipe({
  name: 'filterpipecounty'
})
export class FilterPipeCounty implements PipeTransform {
  transform(counties: County[], input: any): any {
    if (!counties || !input) {
      return counties;
    }
    let id = counties.filter(items => items.ID === input);
    let name = counties.filter(items => items.name === input);
    let entityType = counties.filter(items => items.entityType === input);
    if( id ) {
      return id;
    } else if ( name ) {
      return name;
    } else if ( entityType ) {
      return entityType;
    }
  }
}
