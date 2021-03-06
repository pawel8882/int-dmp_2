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
import { DisplayMessage } from '../../../_class/Messeges/DidsplayMessages';
import { UpdateMessage } from 'src/app/_class/Messeges/UpdateMessage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-one-message',
  templateUrl: './one-message.component.html',
  styleUrls: ['./one-message.component.css'],
  providers: [MessageService]
})
export class OneMessageComponent implements OnInit {

  @ViewChild(Editor) editor!: Editor;

  constructor(private mgService: MessagesService, private Cookie: CookieService, private messageService: MessageService, private router: Router,
    private route: ActivatedRoute, private dataService: DataService, private location: Location) { }

  ngOnInit(): void {

    this.dataService.currentMessageData.subscribe(data => this.loadInitialData(data));

  }

  ngAfterViewInit(): void {

    if (!this.detailedMessage == undefined) {
      var editor = new Quill('#messageContent', this.options);
      editor.setContents(this.detailedMessage.message.content);
      this.loadContent();
    }
   
  }

  messageData!: DisplayMessage;

  textEditor!: Quill;

  mailText!: Delta;

  detailedMessage!: DetailedMessage;

  options = { readOnly: true, theme: 'bubble' };

  pinnedButtonText!: string;

  pinnedButtonIcon!: string;

  OpenLink(link: string) {
      this.router.navigate([link], { relativeTo: this.route });
  }

  getDetailedMessage(messageId: number, user: string, id: number, character: string): void {

      var sub = new Subject<DetailedMessage>();
      sub.subscribe(
        { next: (mg => this.detailedMessage = this.mgService.parseDelta(mg)) });
      sub.subscribe(
        { next: (mg => this.checkPinned(mg.pinned)) });

    this.mgService.getDetailedMessage(messageId, user, id, character).subscribe(sub);

  }

  checkPinned(pinned: boolean): void {
    if (pinned == true) { this.pinnedButtonText = 'Odepnij wiadomość'; this.pinnedButtonIcon = 'pi pi-times'}
    if (pinned == false) { this.pinnedButtonText = 'Przypnij wiadomość'; this.pinnedButtonIcon = 'pi pi-tag' }
    this.detailedMessage.pinned = pinned;
  }

  loadContent(): void {
    var i;
    var editors = {};
    for (i = 0; i < this.detailedMessage.message.replyMessages.length; i++) {
      var editor = new Quill('#messageContent' + String(i), this.options);
      Object.assign(editors, { i: editor.setContents(this.detailedMessage.message.replyMessages[i].content) });
    }
  }

  changePinned(pinned: boolean) {

    var updateMessage: UpdateMessage = {
      messageId: this.messageData.messageId, type: this.detailedMessage.type,
      id: this.detailedMessage.id, pinned: this.detailedMessage.pinned,
    }
    if (pinned == true) { updateMessage.pinned = false;}
    if (pinned == false) { updateMessage.pinned = true; }
    this.mgService.setPinned(updateMessage.messageId, this.Cookie.get('user_name'), updateMessage)
      .subscribe(data => this.checkPinned(data));
  }

  backClick() {
    this.location.back();
  }

  loadInitialData(data: DisplayMessage) {

    this.messageData = data;
    this.getDetailedMessage(data.messageId, this.Cookie.get("user_name"), this.messageData.id, this.messageData.type);

  }

}
