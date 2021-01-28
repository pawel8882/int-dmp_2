import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig, PrimeTemplate } from 'primeng/api';
import { department } from '../projekt-navi/department';
import { lista_branz } from '../data/branza_list';
import { panel_menu, panel_pusty } from '../projekt-navi/panel-menu';
import { ProjektyService } from '../projekty.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-projekt-navi',
  templateUrl: './projekt-navi.component.html',
  styleUrls: ['./projekt-navi.component.css']
})
export class ProjektNaviComponent implements OnInit {

  constructor(private projektservice: ProjektyService) { }


  ngOnInit() {

    this.getDepartments(1);
    this.menu_lewe = panel_menu;
   
  }

  
  department_list!: department[];

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
    var sub = new Subject<department[]>();
    sub.subscribe(
      { next: (departments => this.department_list = departments)});
    sub.subscribe(
      { next: (departments => this.header_department = departments[0].name) });
    sub.subscribe(
      { next: (departments => this.menu_lewe = departments[0].menu) });

    this.projektservice.getDepartments(id).subscribe(sub);
  }

}
