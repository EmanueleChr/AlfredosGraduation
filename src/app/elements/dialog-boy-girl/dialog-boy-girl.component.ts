import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import axios from 'axios';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dialog-boy-girl',
  templateUrl: './dialog-boy-girl.component.html',
  styleUrls: ['./dialog-boy-girl.component.scss']
})
export class DialogBoyGirlComponent implements OnInit {
  @Output() onclose = new EventEmitter()
  @Output() onselect = new EventEmitter<'male'|'female'>()
  
  step : 1 | 2 | 3 = 1
  step3text : string = ''

  nome = ''
  sex : 'male' | 'female' = 'male'

  constructor (private utils : UtilsService) { }

  ngOnInit(): void {
  }

  close () {
    this.onclose.emit()
  }

  select (which : 'male' | 'female') {
    this.onselect.emit(which)
    this.sex = which

    this.step = 2

    this.step3text = which === 'male' ? 'Sei molto bello' : 'Sei molto bella'
    
  }
  
  selectName () {
    this.step = 3

    const fileName = this.nome + "_" + this.utils.getRandomString()

    this.utils.uploadToGithub(fileName, this.nome, 'partecipants')
    this.utils.savePartecipant(this.nome, this.sex)

    setTimeout(() => this.close(), 6000)
  }
}
