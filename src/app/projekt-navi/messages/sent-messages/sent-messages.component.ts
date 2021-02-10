import { Component, Input, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';
import { DataMessages } from 'src/app/_class/Messeges/DataMessages';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { SuggestPerson } from 'src/app/_class/Messeges/SuggestPerson';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})


export class SentMessagesComponent implements OnInit {

  constructor(private mgService: MessagesService, private Cookie: CookieService) {  }

  ngOnInit() {

    this.getReceivedMessages(this.Cookie.get('user_name'), this.Cookie.get("opened_project"), this.minRange, this.maxRange);

  }

  SentMessages: DataMessages[] = [];
  selectedMessage!: MessageInList;
  minRange = 0;
  maxRange = 20;

  getReceivedMessages(user: string, openP: string, min: number, max: number): void {
    var sub = new Subject<DataMessages[]>();
    sub.subscribe(
      { next: (mg => this.SentMessages = mg) });


    this.mgService.getSentMessages(user, Number(openP), min, max).subscribe(sub);
  }

}
