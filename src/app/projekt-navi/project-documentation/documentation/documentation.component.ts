import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { DocumentationService } from '../../../_services/documentation.service';
import { FileOptionsMenu } from '../../../data/FileOptionsMenu';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private docService: DocumentationService) { }

  ngOnInit(): void {
    this.fileOptions = [
      {
        label: "Pobierz",
        icon: "pi pi-cloud-download"
      },
      {
        label: "Szczegóły",
        icon: "pi pi-question"
      },
      {
        label: "Odznacz wszystko",
        icon: "pi pi-times",
        command: (event) => this.unselectFiles()
      }
    ];
    this.docService.getDirectories().subscribe(data => this.directories = data);
  }

  directories!: TreeNode[];
  selectedFiles!: TreeNode[];
  fileOptions!: MenuItem[];

  unselectFiles() {
    this.selectedFiles = [];
  }



}
