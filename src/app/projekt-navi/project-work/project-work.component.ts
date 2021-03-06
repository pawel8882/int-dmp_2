import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Department } from '../../_class/Departments/Department';
import { ProjectWorkService } from 'src/app/_services/SharedServices/project-work.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-work',
  templateUrl: './project-work.component.html',
  styleUrls: ['./project-work.component.css']
})
export class ProjectWorkComponent implements OnInit {

  constructor(private projectWork: ProjectWorkService) {
    this.subscription = projectWork.currentDepartment.subscribe(department => this.department = department);
  }

  department!: Department;
  subscription!: Subscription;

  ngOnInit(): void {
  }

}
