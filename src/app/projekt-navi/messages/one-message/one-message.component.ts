import { Component, Directive, OnInit, ViewChild, Input, AfterViewInit, Injectable, ElementRef } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { person_list } from 'src/app/data/person_list';
import { Person } from 'src/app/_class/Person';
import { NewMessage } from 'src/app/_class/Messeges/NewMessage';
import { SuggestPerson } from 'src/app/_class/Messeges/SuggestPerson';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DataService } from 'src/app/_services/data.service';
import    Quill  from 'quill';
import Delta from 'quill-delta';
import { Editor } from "primeng/editor";
import { Message } from '../../../_class/Messeges/Message';
import { Header } from '../../../_class/Messeges/Header';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';
import { DetailedMessage } from 'src/app/_class/Messeges/DetailedMessage';

@Component({
  selector: 'app-one-message',
  templateUrl: './one-message.component.html',
  styleUrls: ['./one-message.component.css'],
  providers: [MessageService]
})
export class OneMessageComponent implements OnInit {

  @ViewChild(Editor) editor!: Editor;

  constructor(private mgService: MessagesService, private Cookie: CookieService, private messageService: MessageService, private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.currentMessageId.subscribe(data => this.messageId = data);
    this.getDetailedMessage(this.messageId, this.Cookie.get("user_name"));
    console.log(this.messageId);

  }

  ngAfterViewInit(): void {

    var editor = new Quill('#messageContent', this.options);
    editor.setContents(this.detailedMessage.message.content);
    this.loadContent();
   
  }

  messageId!: number;

  textEditor!: Quill;

  mailText!: Delta;

  detailedMessage!: DetailedMessage;

  options = { readOnly: true, theme: 'bubble' };

  OpenLink(link: string) {
      this.router.navigate([link], { relativeTo: this.route });
  }

  getDetailedMessage(messageId : number, user: string): void {

    this.mgService.getDetailedMessage(messageId, user).subscribe(data => this.detailedMessage = this.mgService.parseDelta(data));

  }

  loadContent(): void {
    var i;
    var editors = {};
    for (i = 0; i < this.detailedMessage.message.replyMessages.length; i++) {
      var editor = new Quill('#messageContent' + String(i), this.options);
      Object.assign(editors, { i: editor.setContents(this.detailedMessage.message.replyMessages[i].content) });
    }
  }

}
