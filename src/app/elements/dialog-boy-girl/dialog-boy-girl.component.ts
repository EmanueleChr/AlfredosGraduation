import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-boy-girl',
  templateUrl: './dialog-boy-girl.component.html',
  styleUrls: ['./dialog-boy-girl.component.scss']
})
export class DialogBoyGirlComponent implements OnInit {
  @Output() onclose = new EventEmitter()
  @Output() onselect = new EventEmitter<'male'|'female'>()
  
  step : 1 | 2 = 1
  step2text : string = ''

  constructor() { }

  ngOnInit(): void {
  }

  close () {
    this.onclose.emit()
  }

  select (which : 'male' | 'female') {
    this.onselect.emit(which)

    this.step = 2

    this.step2text = which === 'male' ? 'Sei molto bello' : 'Sei molto bella'

    setTimeout(() => this.close(), 3000)
  }
}
