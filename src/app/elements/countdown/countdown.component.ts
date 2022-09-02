import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  time : Moment = moment()
  duration? : moment.Duration
  interval? : any

  constructor() { }

  ngOnInit(): void {
    const dataLaurea = moment()
    dataLaurea.year(2022).month(9).day(21).hour(0).minute(0).seconds(0)

    this.duration = moment.duration(dataLaurea.diff(moment()))

    this.interval = setInterval(() => {
      this.duration?.subtract(1, 'second')
    }, 1000)
  }

  daysLeft () {
    return this.duration?.days().toString().padStart(2, '0')
  }
  hoursLeft () {
    return this.duration?.hours().toString().padStart(2, '0')
  }
  minutesLeft () {
    return this.duration?.minutes().toString().padStart(2, '0')
  }
  secondsLeft () {
    return this.duration?.seconds().toString().padStart(2, '0')
  }

}
