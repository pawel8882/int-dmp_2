import { Component, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';
import { ReceivedMessages } from 'src/app/_class/Messeges/ReceivedMessages';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {

  constructor(private mgService: MessagesService, private Cookie: CookieService) { }

  ngOnInit() {

    this.getReceivedMessages(this.Cookie.get('user_name'), this.Cookie.get("opened_project"), this.minRange, this.maxRange);

  }

  ReceivedMessages: ReceivedMessages[] = [];
  selectedMessage!: MessageInList;
  minRange = 0;
  maxRange = 20;

  getReceivedMessages(user: string, openP: string, min: number, max: number): void {
    var sub = new Subject<ReceivedMessages[]>();
    sub.subscribe(
      { next: (mg => this.ReceivedMessages = mg) });

    this.mgService.getReceivedMessages(user, Number(openP), min, max).subscribe(sub);
  }

}
