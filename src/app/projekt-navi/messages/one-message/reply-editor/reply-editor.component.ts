import { Component, Directive, OnInit, ViewChild, Input, AfterViewInit, Injectable } from '@angular/core';
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
import { Quill } from 'quill';
import Delta from 'quill-delta';
import { Editor } from "primeng/editor";
import { MessageType } from 'src/app/_class/Messeges/_enum/MessageType';
import { DisplayMessage } from '../../../../_class/Messeges/DidsplayMessages';

@Component({
  selector: 'app-reply-editor',
  templateUrl: './reply-editor.component.html',
  styleUrls: ['./reply-editor.component.css']
})
export class ReplyEditorComponent implements OnInit {

  @ViewChild(Editor) editor!: Editor;

  constructor(private mgService: MessagesService, private Cookie: CookieService, private messageService: MessageService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessageData.subscribe(data => this.messageData = data);
  }

  ngAfterViewInit(): void {

    this.textEditor = this.editor.getQuill();

  }

  @Input() messageData!: DisplayMessage;

  textEditor!: Quill;

  mailText!: Delta;

  uploadedFiles: any[] = [];

  selectedFiles: any[] = [];

  onSelect(event: any) {
    this.selectedFiles = [];
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }

  send() {
    if (this.textEditor.getContents().length() == 0) { this.messagePOP('error', 'Brak odbiorcy', 'Proszę wpisać co najmniej jednego odbiorcę.') }
    else {
      var message = new NewMessage();
      var delta = new Delta(this.textEditor.getContents());
      message.toPersons = this.messageData.toPersons;
      message.dwPersons = this.messageData.dwPersons;

      this.mgService.sentReplyMessage(this.messageData.messageId, this.Cookie.get("user_name"), message, delta, this.messageData.id, this.messageData.messageType)
        .subscribe(data => { this.messagePOP('success', 'Wysłano wiadomość', ''), this.cleanMessage() }, error => this.messagePOP('warn', 'Błąd', ''));
    }
  }


  messagePOP(severity: string, summary: string, detail: string) {

    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 })

  }

  cleanMessage(): void {

    var delta = new Delta();
    this.textEditor.setContents(delta);

  }

  getOpenedMessage() {



  }

}
