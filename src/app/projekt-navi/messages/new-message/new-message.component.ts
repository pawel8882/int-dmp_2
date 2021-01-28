import { Component, Directive, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { person_list } from 'src/app/data/person_list';
import { person } from 'src/app/_class/Person';


@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})




export class NewMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  text: string = "";

  person_suggest!: person[];

  person_ToSend!: person[];

  uploadedFiles: any[] = [];

  selectedFiles: any[] = [];


  search_person_suggest() {
    this.person_suggest = person_list;
  }

  onSelect(event: any) {
    this.selectedFiles = [];
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }


}
