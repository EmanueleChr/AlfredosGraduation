import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-omino',
  templateUrl: './omino.component.html',
  styleUrls: ['./omino.component.scss']
})
export class OminoComponent implements OnInit {
  /**
   * Indica di quando si possono scostare dal centro gli omini (più ce ne devono essere e maggiora sarà dimensionato questo valore)
   */
  @Input() spread = 75

  @Input() sex : 'male' | 'female' = 'male'

  speed = this.random(10, 50) / 10 + 's'
  left = this.random(-this.spread, this.spread) + 'px'
  top = this.random(-this.spread, this.spread) + 'px'
  width = this.random(20, 50) + 'px'
  opacity = this.random(3, 10) / 10 
  
  constructor() { }

  ngOnInit(): void {
  }

  random (min : number, max : number) {
    return Math.random() * (max - min) + min;
  }
}
