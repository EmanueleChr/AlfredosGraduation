import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-boy-girl',
  templateUrl: './dialog-boy-girl.component.html',
  styleUrls: ['./dialog-boy-girl.component.scss']
})
export class DialogBoyGirlComponent implements OnInit {
  @Output() onclose = new EventEmitter()
  @Output() onselect = new EventEmitter<'male'|'female'>()
  
  constructor() { }

  ngOnInit(): void {
  }

  close () {
    this.onclose.emit()
  }

  select (which : 'male' | 'female') {
    this.onselect.emit(which)

    this.close()
  }
}
