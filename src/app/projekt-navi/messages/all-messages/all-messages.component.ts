import { Component, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { message } from 'src/app/projekt-navi/messages/message';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css']
})
export class AllMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.messages = message_list;

  }

  messages!: message[];

  selectedMessage!: message;

}
