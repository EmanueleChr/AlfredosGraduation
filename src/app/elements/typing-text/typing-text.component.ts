import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-text',
  templateUrl: './typing-text.component.html',
  styleUrls: ['./typing-text.component.scss']
})
export class TypingTextComponent implements OnInit {
  @Input() text : string = ''
  /**
   * Dopo quanto tempo cominicia a scrivere
   */
  @Input() delay : number = 0

  textParts : string[] = []
  interval : any = null
  shownText : string = ''

  constructor() { 
    
  }

  ngOnInit(): void {
    this.textParts = this.text.split('')

    let i = 0

    setTimeout(() => {
      this.interval = setInterval(() => {
        
        if (i < this.text.length)
          this.shownText += this.textParts[i++]
        else clearInterval(this.interval)
      }, 50)
      
    }, this.delay)
  }

}
