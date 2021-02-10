import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private Cookie: CookieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


  OpenLink(link: string) {
    this.router.navigate([link], { relativeTo: this.route });
  }

}
