import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString :string ) {
    const resultArray =[];

    if(value.length === 0 ||filterString === ''){
      return value;
    }

    for (const bookingdtls of value){
      if(bookingdtls['UserName'] === filterString){
        resultArray.push(bookingdtls);
      }
    }
    return resultArray;
  }

}



  

