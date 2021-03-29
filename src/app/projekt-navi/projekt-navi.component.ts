import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { SectionDepartments } from '../_class/Departments/SectionDepartments';
import { lista_branz } from '../data/branza_list';
import { panel_menu, panel_pusty } from '../data/panel-menu';
import { ProjektyService } from '../_services/projekty.service';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'
import { Project } from '../_class/Project';
import { Department } from '../_class/Departments/Department';
import { ProjectWorkService } from 'src/app/_services/SharedServices/project-work.service';
import { MenuItemProjectWork } from 'src/app/data/MenuItem-projectwork';
import { MenuItemDocumentation } from 'src/app/data/MenuItem-documentation';
import { MenuItemProjectSchedule } from 'src/app/data/MenuItem-projectschedule';


@Component({
  selector: 'app-projekt-navi',
  templateUrl: './projekt-navi.component.html',
  styleUrls: ['./projekt-navi.component.css']
})
export class ProjektNaviComponent implements OnInit {

  constructor(private projektservice: ProjektyService, private Cookie: CookieService, private router: Router, private route: ActivatedRoute,
  private projectWork: ProjectWorkService) { }


  ngOnInit() {

    this.setProjectWork();
   
  }

  ProjectHeader!: Project;
  
  sectionDepartment_list!: SectionDepartments[];

  department_list!: Department[];

  selectedSection!: SectionDepartments;

  selectedDepartment!: Department;

  selectedButton!: string;

  menu_lewe!: MenuItem[];

  ikonka = "pi pi-plus";

  add_department = false;

  header_department!: string;

  optionButton!: boolean;


  setProjectWork() {

    this.menu_lewe = MenuItemProjectWork;
    this.getDepartments(Number(this.Cookie.get("opened_project")), this.Cookie.get('user_name'));
    this.getProjectHeader(Number(this.Cookie.get("opened_project")));
    this.selectedButton = 'Projektowanie';
    this.optionButton = true;

  }


  setProjectDocumentation() {

    this.menu_lewe = MenuItemDocumentation;
    this.getProjectHeader(Number(this.Cookie.get("opened_project")));
    this.selectedButton = 'Dokumentacja';
    this.optionButton = false;

  }

  setProjectSchedule() {

    this.menu_lewe = MenuItemProjectSchedule;
    this.getProjectHeader(Number(this.Cookie.get("opened_project")));
    this.selectedButton = 'Harmonogram';
    this.optionButton = false;

  }


  setHeaderBranza(department_id: number) {

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

  getDepartments(id: number, user: string): void {
    var sub = new Subject<SectionDepartments[]>();
    sub.subscribe(
      { next: (departments => this.sectionDepartment_list = departments) });
    sub.subscribe(
      { next: (departments => this.header_department = departments[0].departments[0].name) });
    sub.subscribe(
      { next: (departments => this.getInitialSelectedDepartments(departments)) });

    this.projektservice.getDepartments(id, user).subscribe(sub);
  }

  getInitialSelectedDepartments(event: any): void {
    this.department_list = this.sectionDepartment_list[0].departments;
    this.selectedSection = this.sectionDepartment_list[0];
    this.selectedDepartment = this.department_list[0];
    this.projectWork.changeDepartment(this.selectedDepartment);
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


  changeSelectedDepartment(department: Department) {
    this.selectedDepartment = department;
    this.setHeaderBranza(department.id);
    this.projectWork.changeDepartment(this.selectedDepartment);
  } 

  changeSelectedSection(section: SectionDepartments) {
    this.selectedSection = section;
    this.department_list = section.departments;
    this.changeSelectedDepartment(section.departments[0]);
  }

}
