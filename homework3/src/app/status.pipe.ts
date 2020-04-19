import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform( statusnow : boolean): any {
    var statusElement = document.getElementById("status");
    if (statusnow === true) {
      status = "Deactivated";
      statusElement.setAttribute("target", "NotActive");
    } else if (statusnow === false) {
      status = "Active";
      statusElement.setAttribute("target", "Active");
    }
    else{
      status="unknown";
    }
    return status;
  }

}
