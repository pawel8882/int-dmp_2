import { Component, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';
import { ReceivedMessages } from 'src/app/_class/Messeges/ReceivedMessages';
import { DisplayMessage } from 'src/app/_class/Messeges/DidsplayMessages';
import { MessagesService } from 'src/app/_services/messages.service';
import { DataService } from 'src/app/_services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { PaginatorFilterClass } from '../paginator/PaginatorFilterClass';
import { ParamDisplayMessages } from 'src/app/_class/Messeges/ParamDisplayMessages';


@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {

  constructor(private mgService: MessagesService, private Cookie: CookieService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {


  }

  ReceivedMessages: DisplayMessage[] = [];
  selectedMessage!: DisplayMessage;
  totalMessages!: number;

  getReceivedMessages(user: string, openP: string, paginator: PaginatorFilterClass): void {
    var sub = new Subject<ParamDisplayMessages>();
    sub.subscribe(
      { next: (mg => this.ReceivedMessages = mg.messages)});
    sub.subscribe(
      { next: (mg => this.totalMessages = mg.messagesNumber) });

    this.mgService.getReceivedMessages(user, Number(openP), paginator).subscribe(sub);
  }

  onRowSelect(event: any) {
    this.dataService.changeMessageData(event.data);
    this.router.navigate(['OneMessage'], { relativeTo: this.route.parent });
  }

  filterMessages(event: PaginatorFilterClass) {

    this.getReceivedMessages(this.Cookie.get('user_name'), this.Cookie.get("opened_project"), event);

  }

}
