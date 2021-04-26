import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DocumentationService } from '../../../_services/documentation.service';
import { treeDataDemo } from '../../../data/treeDataDemo';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private docService: DocumentationService) { }

  ngOnInit(): void {
    this.docService.getDirectories().subscribe(data => this.directories = data);
  }

  directories!: TreeNode[];


}
