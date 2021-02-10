import { Component, Directive, OnInit, ViewChild, Input, AfterViewInit, Injectable, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { person_list } from 'src/app/data/person_list';
import { Person } from 'src/app/_class/Person';
import { NewMessage } from 'src/app/_class/Messeges/NewMessage';
import { SuggestPerson } from 'src/app/_class/Messeges/SuggestPerson';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import    Quill  from 'quill';
import Delta from 'quill-delta';
import { Editor } from "primeng/editor";
import { Message } from '../../../_class/Messeges/Message';
import { Header } from '../../../_class/Messeges/Header';
import { message_list } from 'src/app/data/message_list';
import { MessageInList } from 'src/app/_class/Messeges/MessegeInList';

@Component({
  selector: 'app-one-message',
  templateUrl: './one-message.component.html',
  styleUrls: ['./one-message.component.css'],
  providers: [MessageService]
})
export class OneMessageComponent implements OnInit {

  @ViewChild(Editor) editor!: Editor;

  constructor(private mgService: MessagesService, private Cookie: CookieService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.message = message_list[0];

  }

  ngAfterViewInit(): void {

  /*this.textEditor = this.editor.getQuill();*/
    var editor = new Quill('#test', { theme: 'bubble' });
   
  }



  textEditor!: Quill;

  mailText!: Delta;

  message!: MessageInList;

  options = { theme: 'bubble' };

}
