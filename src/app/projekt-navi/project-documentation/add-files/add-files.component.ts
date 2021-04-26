import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadedFiles: any[] = [];

  selectedFiles: any[] = [];

  onSelect(event: any) {
    this.selectedFiles = [];
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }

}
