import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dialog-auguri',
  templateUrl: './dialog-auguri.component.html',
  styleUrls: ['./dialog-auguri.component.scss']
})
export class DialogAuguriComponent implements OnInit {
  @Output() onclose : EventEmitter<any> = new EventEmitter()

  nome : string = ''
  body : string = ''
  rating = 4

  step = 1

  constructor(private utils : UtilsService) { }

  ngOnInit(): void {
    if (this.utils.alreadySent())
      this.nome = this.utils.getPartecipant().name

    console.log(this.nome)
  }

  close () {
    this.onclose.emit()
  }
  
  save () {
    const filename = `${this.nome}_${this.utils.getRandomString()}`
    const content = "Rating: " + this.rating + "\n\n" + this.body

    this.utils.uploadToGithub(filename, content, 'auguri')

    this.step = 2
    setTimeout(() => {
      this.close()
    }, 7000);
  }
}
