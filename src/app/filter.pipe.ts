import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
error:any;
  // transform(value: any,filterString :string ) {
  //   const resultArray =[];

  //   if(value.length === 0 ||filterString === ''){
  //     return value;
  //   }

  //   for (const bookingdtls of value){
  //     if(bookingdtls['UserName'] === filterString){
  //       resultArray.push(bookingdtls);
  //     }
  //   }
  //   return resultArray;
  // }
  transform(bookingDetails: Array<any>, search: string): any {
    if (bookingDetails && search)
    {
      
      return bookingDetails.filter(
        (d) =>
          d.UserName.indexOf(search) > -1 ||
          d.id == search ||
          d.DateOfBooking.indexOf(search) > -1
      );
    }
    return bookingDetails;
  }
}



  

