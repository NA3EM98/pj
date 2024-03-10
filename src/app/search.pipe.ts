import { Pipe, PipeTransform } from '@angular/core';
// import { Proudact } from './interface/proudact';
import { Products } from './interface/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Proudact: Products[] , term:string):Products[] {
    return Proudact.filter((Proudact)=>Proudact.title.toLowerCase().includes(term.toLowerCase()));
  }

}
