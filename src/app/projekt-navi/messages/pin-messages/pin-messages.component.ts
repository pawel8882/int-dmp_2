import { Component, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';

@Component({
  selector: 'app-pin-messages',
  templateUrl: './pin-messages.component.html',
  styleUrls: ['./pin-messages.component.css']
})
export class PinMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.messages = message_list;

  }

  messages!: MessageInList[];

  selectedMessage!: MessageInList;
}
