import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCut'
})
export class TextCutPipe implements PipeTransform {

  transform(text:string, Limit:number):string{
    return text.split(` `).slice(0,Limit).join(` `);
  }

}
