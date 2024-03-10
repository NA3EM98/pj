import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wishred'
})
export class WishredPipe implements PipeTransform {

  transform( id:string): unknown {
    return
  }

}
