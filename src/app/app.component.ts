import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routes!: Routes;

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.title = "IntDMP";
    
  }

  OpenLink(link: string) {

    this.router.navigate([link]);

  }

 

  title = 'Menadżer projektów';
  nazwaControl = new FormControl('');


  time = new Date();
  constructor(private primengConfig: PrimeNGConfig, private router: Router) {
    setInterval(() => this.time = new Date(), 3000);
  }
}





