import {Pipe, PipeTransform} from "@angular/core";
import {CheckedDate} from "../../../shared/app.interfaces";

@Pipe({
  name : 'returnTimes'
})

export class ReturnTimesPipe implements PipeTransform {
  transform(dates: CheckedDate): number[] {
    const times: Array<number> = []
    for(let time of dates.times){
      let hour = new Date(time).getHours()
      times.push(hour)
    }
    return times
  }

}
