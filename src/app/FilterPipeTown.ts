import {Pipe, PipeTransform} from '@angular/core';
import {Town} from './croatia';


@Pipe({
  name: 'filterpipetown'
})
export class FilterPipeTown implements PipeTransform {
  transform(towns: Town[], input: any): any {
    if (!towns || !input) {
      return towns;
    }
    let id = towns.filter(items => items.ID === input);
    let name = towns.filter(items => items.name === input);
    let entityType = towns.filter(items => items.entityType === input);
    if( id ) {
      return id;
    } else if ( name ) {
      return name;
    } else if ( entityType ) {
      return entityType;
    }
  }
}
