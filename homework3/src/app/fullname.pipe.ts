import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(firstName:string, lastName: string): string {
    if(lastName=== ""){
      return "USER";
    }
    else{
      return firstName + " " + lastName;
    }
  }

}
