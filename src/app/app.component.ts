import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
 

  routes!: Routes;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private log: LoginService) {
    setInterval(() => this.time = new Date(), 3000);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.title = "IntDMP";
    this.isLoggedIn = this.log.checkCredentials();
    let i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i != -1) {
      this.log.retrieveToken(window.location.href.substring(i + 5));

    }

  }

  OpenLink(link: string) {

    this.router.navigate([link]);

  }

  login() {

    this.log.login();

  }

  logout() {
    this.log.logout();
  }

  title = 'Menadżer projektów';
  nazwaControl = new FormControl('');


  time = new Date();

}





