import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginService } from './_services/login.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  login_label = "Zaloguj";
  UserInfo: any = {};

  routes!: Routes;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private log: LoginService) {
    setInterval(() => this.time = new Date(), 3000);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.title = "IntDMP";
    this.isLoggedIn = this.log.checkCredentials();
    this.login_logout_change();
    let i = window.location.href.indexOf('code');
    if (!this.isLoggedIn && i != -1) {
      this.log.retrieveToken(window.location.href.substring(i + 5));
    }
    this.userInfo();

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

  login_logout_change() {
    if (this.isLoggedIn == false) { this.login_label = "Zaloguj" }
    else {this.login_label = "Wyloguj"}
  }

  login_logout_function() {
    if (this.isLoggedIn == false) { this.login() }
    else { this.logout() }
  }

  userInfo() {
    this.log.getUserInfo().subscribe(data => { this.UserInfo = data });
  }

  title = 'Menadżer projektów';
  nazwaControl = new FormControl('');


  time = new Date();

}





