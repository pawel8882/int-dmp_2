import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FileStatus } from '../../../_class/Files/FileStatus';
import { DocumentationService } from '../../../_services/documentation.service';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  constructor(private docService: DocumentationService) { }

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  ngOnInit(): void {
  }


  uploadedFiles: any[] = [];
  selectedFiles: any[] = [];
  fileStatus!: FileStatus[];

  onSelect(event: any) {
    this.selectedFiles = [];
    for (let file of event.files) {
      this.selectedFiles.push(file);
    }
  }

  uploadFilesToServer(event: any) {
    this.docService.uploadFiles(event.files, "").subscribe(data => this.fileStatus = data);
    this.fileUpload.clear();
  }

  getFileStatusColor(status: string) {
    switch (status) {
      case 'OK':
        return "green"
    }
    return "red"
  }
}
