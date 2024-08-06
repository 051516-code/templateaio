import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splas-screen',
  templateUrl: './splas-screen.page.html',
  styleUrls: ['./splas-screen.page.scss'],
})
export class SplasScreenPage implements OnInit {

  constructor(
    private router :  Router

  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/wellcome']);
    }, 4000);
  
  }




}
