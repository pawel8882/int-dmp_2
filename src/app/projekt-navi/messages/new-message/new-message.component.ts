import { Component, Directive, OnInit, ViewChild, Input, AfterViewInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { person_list } from 'src/app/data/person_list';
import { Person } from 'src/app/_class/Person';
import { NewMessage} from 'src/app/_class/Messeges/NewMessage';
import { SuggestPerson } from 'src/app/_class/Messeges/SuggestPerson';
import { MessagesService } from 'src/app/_services/messages.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Quill } from 'quill';
import   Delta from 'quill-delta';
import { Editor } from "primeng/editor";
import { Message } from '../../../_class/Messeges/Message';
import { Header } from '../../../_class/Messeges/Header';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css'],
  providers: [MessageService]
})



export class NewMessageComponent implements OnInit {

  @ViewChild(Editor) editor!: Editor;

  /*textEditor = new FormControl('');*/

  constructor(private mgService: MessagesService, private Cookie: CookieService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.textEditor = this.editor.getQuill();

  }

  textEditor!: Quill;

  mailText!: Delta;

  Header: string = '';

  personSuggest!: SuggestPerson[];

  personToSend: SuggestPerson[] = [];

  personToSendDW: SuggestPerson[] = [];

  uploadedFiles: any[] = [];

  selectedFiles: any[] = [];

  searchPersonSuggest(event: any) {
    this.mgService.getSuggestPersons(Number(this.Cookie.get("opened_project")), event.query)
      .subscribe(data => this.personSuggest = data);
  }

  onSelect(event: any) {
    this.selectedFiles = [];
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }

  send() {
    if (this.personToSend.length == 0)
    { this.messagePOP('error', 'Brak odbiorcy', 'Proszę wpisać co najmniej jednego odbiorcę.') }
    else
    {
      var message = new NewMessage();
      var delta = new Delta(this.textEditor.getContents());
      message.header = this.Header;
      message.toPersons = this.personToSend;
      message.dwPersons = this.personToSendDW;

      this.mgService.sentMessage(Number(this.Cookie.get("opened_project")), this.Cookie.get("user_name"), message, delta)
        .subscribe(data => { this.messagePOP('success', 'Wysłano wiadomość', ''), this.cleanMessage() }, error => this.messagePOP('warn', 'Błąd', ''));
    }
  }

  messagePOP(severity: string, summary: string, detail: string) {

    this.messageService.add({ severity: severity, summary: summary, detail: detail, life: 3000 })

  }

  cleanMessage(): void {

    this.personToSend = [];
    this.personToSendDW = [];
    this.Header = '';
    var delta = new Delta();
    this.textEditor.setContents(delta);

  }


}
