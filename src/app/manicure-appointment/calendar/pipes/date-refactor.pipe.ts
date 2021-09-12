import {Pipe, PipeTransform} from "@angular/core";
import {CheckedDate, CompleteDate} from "../../../shared/app.interfaces";

@Pipe({
  name: 'refactorPipe'
})

export class DateRefactorPipe implements PipeTransform{
  transform(dates: CheckedDate[]): CompleteDate[] {

    if(!dates){
      return []
    }

    const arrDates: Array<CompleteDate> = []
    const dayWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    const month = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек']
      for (let date of dates) {
        const hours = date.times.map(hour => {
          return new Date(hour).getHours()
        })
        arrDates.push({
          date: new Date(date.date),
          times: hours,
          busy: date.busy,
          dayWeek: dayWeek[new Date(date.date).getDay()],
          month: month[new Date(date.date).getMonth()]
        })
      }
    return arrDates
  }

}
