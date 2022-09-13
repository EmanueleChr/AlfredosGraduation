import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  wrapperClass : any = {
    wrapper : true,
    black : true
  }

  constructor(private router : Router) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.wrapperClass = {
        ... this.wrapperClass,
        disappear : true
      }
    }, 5000)

    setTimeout(() => {
      this.router.navigate(['home'])
    }, 6000);
  }

}
