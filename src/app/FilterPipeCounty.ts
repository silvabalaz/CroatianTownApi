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
    if( id[0] ) {
      console.log('id county' + id[0].name.charAt(0));
      return id[0].name;
    } else if ( name ) {
      console.log('name county' + name);
      return name;
    } else if ( entityType ) {
      console.log('entityType' + entityType[0].entityType );
      return entityType;
    }
  }
}
