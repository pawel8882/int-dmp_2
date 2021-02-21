import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Department } from '../_class/Department';
import { lista_branz } from '../data/branza_list';
import { panel_menu, panel_pusty } from '../data/panel-menu';
import { ProjektyService } from '../_services/projekty.service';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'
import { Project } from '../_class/Project';


@Component({
  selector: 'app-projekt-navi',
  templateUrl: './projekt-navi.component.html',
  styleUrls: ['./projekt-navi.component.css']
})
export class ProjektNaviComponent implements OnInit {

  constructor(private projektservice: ProjektyService, private Cookie: CookieService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {

    this.getDepartments(Number(this.Cookie.get("opened_project")));
    this.getProjectHeader(Number(this.Cookie.get("opened_project")));
    this.menu_lewe = panel_menu;
   
  }

  ProjectHeader!: Project;
  
  department_list!: Department[];

  menu_lewe!: MenuItem[];

  ikonka = "pi pi-plus";

  add_department = false;

  header_department!: string;


  setHeaderBranza(department_id: number) {

    this.menu_lewe = (this.department_list.find(a => a.id == department_id)?.menu) as MenuItem[];
    this.header_department = (this.department_list.find(a => a.id == department_id)?.name) as string;

  }

  ikonka_change() {

    if (this.add_department == false) {
            this.ikonka = "pi pi-plus";
          }
        else {
            this.ikonka = "pi pi-minus";
          }

  }

  getDepartments(id: number): void {
    var sub = new Subject<Department[]>();
    sub.subscribe(
      { next: (departments => this.department_list = departments)});
    sub.subscribe(
      { next: (departments => this.header_department = departments[0].name) });
    sub.subscribe(
      { next: (departments => this.menu_lewe = departments[0].menu) });

    this.projektservice.getDepartments(id).subscribe(sub);
  }

  getProjectHeader(id: number): void {
    var sub = new Subject();
    sub.subscribe(
      { next: (projekt => this.ProjectHeader = projekt as Project) });

    this.projektservice.getProjekt(id).subscribe(sub);
  }

  OpenLink(link: string) {
    this.router.navigate([link], { relativeTo: this.route });
  }

}
