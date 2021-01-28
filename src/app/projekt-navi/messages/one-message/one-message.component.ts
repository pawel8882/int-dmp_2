import { Component, OnInit } from '@angular/core';
import { message_list } from 'src/app/data/message_list';
import { message } from 'src/app/projekt-navi/messages/message';

@Component({
  selector: 'app-one-message',
  templateUrl: './one-message.component.html',
  styleUrls: ['./one-message.component.css']
})
export class OneMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.message = message_list[0];

  }

  message!: message;

}
