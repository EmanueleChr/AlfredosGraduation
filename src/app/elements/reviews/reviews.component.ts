import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

type Review = {
  vote : number
  name : string
  body : string
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {

  REVIEWS : Review[ ]= [
    {
      vote: 5,
      name: "Ugo Tozzi",
      body: "Bravo fra"
    },
    {
      vote: 5,
      name: "Toto Cotugno",
      body: "Auguri Alfredo!"
    },
    {
      vote: 4,
      name: "Nino d'Angelo",
      body: "Waaaaa"
    },
    
  ]

  styles : any[] = []

  constructor() { }

  ngOnInit(): void {
    const screenWidth = window.outerWidth

    const maxReviewWidth = 250

    this.REVIEWS.forEach(e => {
      const randomDelay = this.random(1, 15)
      console.log(randomDelay)
      
      this.styles.push({
        'animation-delay' : randomDelay + 's',
        'left' : this.random(0, screenWidth - maxReviewWidth) + 'px',
        'max-width' : maxReviewWidth + 'px'
      })
    })

  }

  
  random (min : number, max : number) {
    return Math.random() * (max - min) + min;
  }

}
