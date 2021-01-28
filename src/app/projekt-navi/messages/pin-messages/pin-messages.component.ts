import { Component, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { message } from 'src/app/projekt-navi/messages/message';

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

  messages!: message[];

  selectedMessage!: message;
}
