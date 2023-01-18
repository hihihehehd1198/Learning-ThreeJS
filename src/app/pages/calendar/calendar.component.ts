import { CommonModule, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';



enum Time {
  Time1 = "7 - 8.30'",
  Time2 = "8.40 - 10.10'",
  Time3 = "10.20 - 11.50'",
  Time4 = "1 - 2.30'",
  Time5 = "2.40 - 4.10'",
  Time6 = "4.20 - 5.50'",
}

const listDateDefault = [
  "02/01",
  "26/02",
  "27/02",
  "20/03",
  "02/04",
  "23/04",
  "02/07",
]
enum UNIT {
  UNIT1 = "1,2",
  UNIT2 = "3,4",
  UNIT3 = "5,6",
  UNIT4 = "7,8",
  UNIT5 = "9,10",
  UNIT6 = "11,12",
}


@Component({
  selector: 'app-root',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [CommonModule, CustomStyleDirective, FormatDatePipe]
})


export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderCalendar()
    this.renderListDate()
    this.renderListTime()
    this.renderEventDate()


  }
  currentDay = new Date();


  listDay: string[] = []
  listDate: any = {}
  listTime: any[] = []
  listEventDate: any[] = []
  
  renderEventDate() {
    this.listEventDate = []
    for (let i = 0; i < 6; i++) {
      const timeList: any = []
      for (let j = 0; j < 7; j++) {


        const date = new Date(this.listDay[j])
        date.setHours(0)
        // console.log(date.getHours())

        const date02_01 = new Date('2023-01-02')
        const date02_26 = new Date('2023-02-26')

        const date02_27 = new Date('2023-02-27')
        const date04_02 = new Date('2023-04-02')

        const date03_20 = new Date('2023-03-19')
        const date07_02 = new Date('2023-07-02')

        const date04_23 = new Date('2023-04-23')


        if (date.getTime() <= date02_26.getTime()) {
          if ((j === 3 || j === 4)) {
            (i === 3 && j === 3) ? timeList.push('Tội phạm TL1 B602') : (i === 3 && j === 4) ? timeList.push('Tội phạm TL1 B402') : timeList.push('')



          } else if (j === 2) {
            (i === 3) ? timeList.push('Tội phạm B205') : timeList.push('')

          } else {
            timeList.push('')
          }
        } else if (date.getTime() <= date04_02.getTime()) {
          if (date.getTime() > date03_20.getTime() && i === 2) {

            switch (j) {
              case 1:
                timeList.push('Đại cương C201 ')
                break;
              case 2:
                timeList.push('Đại cương TL1 E402 ')
                break;
              case 4:
                timeList.push('Đại cương TL1 B602  ')
                break;
              default:
                timeList.push('')
                break;
            }

          } else {

            switch (j) {

              case 2:
                i === 3 ? timeList.push('Thương mại  B204') : (((i === 0 || i === 1) && date.getTime() <= date04_02.getTime()) ? timeList.push('Lịch sử đảng B204') : timeList.push(''))
                break;
              case 3:
                ((i === 3 || i === 4 || i === 5) && date.getTime() >= date03_20.getTime()) ? timeList.push('Aerobic Ngoai02') : timeList.push('')
                break;
              case 4:
                i === 1 ? timeList.push('Thương mại TL2 - E401') : timeList.push('')
                break;
              case 5:
                i === 5 ? timeList.push('Thương mại TL2 - E401') : ((i === 1 && date.getTime() <= date04_02.getTime()) ? timeList.push('Lịch sử đảng TL1 - B401') : timeList.push(''))
                break;


              default:
                timeList.push('')
                break;
            }
          }



        } else if (date.getTime() <= date04_23.getTime())
          if (date.getTime() >= date03_20.getTime() && i === 2) {

            switch (j) {
              case 1:
                timeList.push('Đại cương C201 ')
                break;
              case 2:
                timeList.push('Đại cương TL1 E402 ')
                break;
              case 4:
                timeList.push('Đại cương TL1 B602  ')
                break;
              default:
                timeList.push('')
                break;
            }
          } else
            switch (j) {
              // case
              case 2:
                ((i === 0 || i === 1) && date.getTime() <= date04_02.getTime()) ? timeList.push('Lịch sử đảng B204') : timeList.push('')
                break;
              case 3:
                ((i === 3 || i === 4 || i === 5) && date.getTime() >= date03_20.getTime()) ? timeList.push('Aerobic Ngoai02') : timeList.push('')
                break;
              default:
                timeList.push('')
                break;
            }
        else if (date.getDate() <= date07_02.getTime()) {
          switch (j) {
            // case

            case 3:
              ((i === 3 || i === 4 || i === 5) && date.getTime() <= date07_02.getTime()) ? timeList.push('Aerobic Ngoai02') : timeList.push('')
              break;
            default:
              timeList.push('')
              break;
          }
        } else {
          timeList.push('')
        }


      }
      this.listEventDate.push(timeList)
    }
  console.log('defaultDay : ', this.currentDay)
  }
  // month = this.currentDay.getMonth()
  renderListTime() {
    for (let i = 1; i <= 12; i += 2) {
      let chunkItem: any = []
      for (let j = 0; j < 2; j++) {
        chunkItem.push(i + j)
      }
      chunkItem = chunkItem.join(',')
      switch (chunkItem) {
        case UNIT.UNIT1:
          chunkItem = { id: chunkItem, time: Time.Time1 }
          break;
        case UNIT.UNIT2:
          chunkItem = { id: chunkItem, time: Time.Time2 }
          break;
        case UNIT.UNIT3:
          chunkItem = { id: chunkItem, time: Time.Time3 }
          break;
        case UNIT.UNIT4:
          chunkItem = { id: chunkItem, time: Time.Time4 }
          break;
        case UNIT.UNIT5:
          chunkItem = { id: chunkItem, time: Time.Time5 }
          break;
        case UNIT.UNIT6:
          chunkItem = { id: chunkItem, time: Time.Time6 }
          break;

        default:
          break;
      }
      this.listTime.push(chunkItem)
    }
  }
  renderListDate() {
    for (let i = 0; i < 7; i++) {
      i === 0 ? this.listDate[0] = 'Chủ nhật' : this.listDate[i] = `thứ ${i + 1}`
    }
    this.listDate = Object.values(this.listDate)
  }
  renderCalendar() {
    let day = this.currentDay.getDay()
    this.listDay = []
    for (let i = 0; i < 7; i++) {
      const newDate = day === 0 ? new Date(2023, this.currentDay.getMonth(), this.currentDay.getDate() + i) :

        new Date(2023, this.currentDay.getMonth(), this.currentDay.getDate() - day + i)

      const [month, date, year] = newDate.toLocaleDateString().split('/')
      const dateString = [year, month, date].join('-')
      this.listDay.push(dateString)
    }
  }

  nextWeek() {
    this.currentDay.setDate(this.currentDay.getDate() + 7)
    this.renderCalendar()
    this.renderEventDate()
  }
  prevWeek() {
    this.currentDay.setDate(this.currentDay.getDate() - 7)
    this.renderCalendar()
    this.renderEventDate()
  }


}
