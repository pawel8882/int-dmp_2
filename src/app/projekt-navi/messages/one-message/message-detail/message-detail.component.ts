import { Component, OnInit } from '@angular/core';
import Quill from 'quill';
import Delta from 'quill-delta';
import { Editor } from "primeng/editor";
import { MessageContentDisplay } from 'src/app/_class/Messeges/MessageContentDisplay';
import { Input } from '@angular/core';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.loadContent();
  }

  @Input() MessageDetail!: MessageContentDisplay;
  @Input() ContentNumber!: Number;

  options = { readOnly: true, theme: 'bubble' };

  loadContent(): void {
    var editor = new Quill('#messageContent' + String(this.ContentNumber), this.options);
    editor.setContents(this.MessageDetail.content);
  }

}
