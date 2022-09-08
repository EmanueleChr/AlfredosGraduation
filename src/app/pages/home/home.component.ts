import { Component, Input, NgZone, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  NUM_OMINI = 5
  NUM_STELLE = 150

  stars : any[] = []
  omini? : { sex : 'male' | 'female' }[] = []

  spread = 75
  
  countOminiAnimation : { text : string, sex : 'male' | 'female' } | null = null //{ text : '+1', sex : 'female'}

  test = ''
  tt () { alert(this.test) }

  /**
   * Muove gli omini verso goal
   */
  progress = '0%'
  
  showDialog : 'boyorgirl' | null = null
  
  constructor(private zone : NgZone) { }
  
  ngOnInit(): void {
    this.stars = new Array(this.NUM_STELLE)

    for (let i = 0; i < this.NUM_OMINI; i++) {
      this.omini?.push({
        sex : Math.random() < .5 ? 'male' : 'female'
      })
    }

    // this.omini = new Array(5)


    if (this.NUM_OMINI < 10) 
      this.spread = 75
    else if (this.NUM_OMINI < 25)
      this.spread = 125
    else if (this.NUM_OMINI < 50)
      this.spread = 200
    else this.spread = 300

    setTimeout(() => this.calcProgress(), 3000)
  }


  calcProgress () {
    this.zone.run(() => {
      const dataLaurea = moment()
      dataLaurea.year(2022).month(9).day(21).hour(0).minute(0).seconds(0)

      const dataInizio = moment()
      dataInizio.year(2022).month(8).day(1).hour(0).minute(0).seconds(0)

      const dateNow = moment()

  // 100 : dataLaurea = x : dateNow
      const p = 100 * (dateNow.valueOf() - dataInizio.valueOf()) / (dataLaurea.valueOf() - dataInizio.valueOf())

      this.progress = p.toFixed(2) + '%'
  
      console.log(this.progress)
    })
  }

  addOmino (sex : 'male' | 'female') {
    this.omini?.push({ sex : sex })
    this.showAddAnimation(sex)
  }

  showAddAnimation (sex : 'male' | 'female') {
    this.countOminiAnimation = {
      text : '+1', sex : sex
    }

    setTimeout(() => {
      this.zone.run(() => {
        this.countOminiAnimation = null
      })
    }, 4000)
  }
}
