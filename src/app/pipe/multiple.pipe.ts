import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: any, args=1,args1=1): any {
    if(!args){
      args=1
    }
    return value*args*args1;
  }

}
