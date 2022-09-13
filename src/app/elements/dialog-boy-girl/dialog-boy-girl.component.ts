import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import axios from 'axios';

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

  ghToken = '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'

  constructor() { }

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

    var data = JSON.stringify({
      "message": "txt file",
      "content": this.nome
    });

    var config = {
        method: 'put',
        url: `https://api.github.com/repos/EmanueleChr/AlfredosGraduation/partecipants/${this.nome}.txt`,
        headers: {
            'Authorization': `Bearer ${this.ghToken}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
      // setTimeout(() => this.close(), 3000)
  }
}
