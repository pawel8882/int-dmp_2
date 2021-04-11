import { Component, NgModule, OnInit, Input } from '@angular/core';
import { Project } from '../_class/Project';
import { ProjektyService } from '../_services/projekty.service';
import { FormControl } from '@angular/forms';
import { find } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ProjectDetails } from '../_class/ProjectDetails';
import { CookieService } from 'ngx-cookie-service'
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})




export class ProjectsListComponent implements OnInit {

  user: string = "undefined";


  ngOnInit() {
    this.user = this.Cookie.get("user_name")
    this.showProjekt();
    
  }
  time = new Date();

  projekty!: Project[];

  oneprojekt!: Project;

  oneprojekt_detail = new Object() as ProjectDetails;

  display = false;

  showDialog() {
    this.display = true;
  }


  constructor(private projektservice: ProjektyService, private router: Router, private Cookie: CookieService) { }


  showProjekt(): void {
    this.projektservice.getProjekty(this.user).subscribe((projekt => this.projekty = projekt));
  }

  getOneProjekt(id: number): void {
    var sub = new Subject();
    sub.subscribe(
      { next: (projekt => this.oneprojekt = projekt as Project) });
    sub.subscribe(
      { next: (projekt => this.oneprojekt_detail = (projekt as Project).details[0] as ProjectDetails)});

    this.projektservice.getProjekt(id).subscribe(sub);
  }

  add(name: string, number: string): void {
    if (!name) { return; }
    if (!number) { return; }
    const complete = false;
    this.projektservice.addProjekt({ name, number, complete } as Project, this.Cookie.get("user_name"))
      .subscribe(_projekt => {
        this.showProjekt();
      })
  };

  delete_projekt(name: string): void {
    if (!name) { return; }
    this.projektservice.deleteProjekt(this.projekty.find(projekt => projekt.name === name) as Project).subscribe(_projekt => { this.showProjekt() })
  }

  openProject(link: string, project_id: number) {
    this.Cookie.set("opened_project", String(project_id));
    this.router.navigate([link]);
  }
}



