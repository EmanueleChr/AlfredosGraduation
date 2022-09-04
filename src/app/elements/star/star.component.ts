import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  width : number = this.random(25, 125)
  opacity : number = this.random(1, 25) / 100
  speed : number = this.random(10, 2000) / 10
  left  : number = this.random(-100, 100)
  top   : number = this.random(-100, 100)

  constructor() { }

  ngOnInit(): void {
  }
  
  random (min : number, max : number) {
    return Math.random() * (max - min) + min;
  }
}
