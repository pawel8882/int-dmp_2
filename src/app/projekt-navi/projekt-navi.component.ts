import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { branza_list } from '../projekt-navi/branza_list';

@Component({
  selector: 'app-projekt-navi',
  templateUrl: './projekt-navi.component.html',
  styleUrls: ['./projekt-navi.component.css']
})
export class ProjektNaviComponent implements OnInit {

  constructor() { }


  ngOnInit() {

    this.lista_alfabetycznie = this.lista.sort((a,b)=>a.name.localeCompare(b.name));
    

  }

 lista: branza_list[] = [
    {
      projektID: 1,
      name: "Konstrukcja"
    },
    {
      projektID: 1,
      name: "Architektura"
    },
    {
      projektID: 1,
      name: "Instalacje"
   },

   {
     projektID: 1,
     name: "Krawężnik"
   },

  ];

  lista_alfabetycznie!: branza_list[];

  ikonka = "pi pi-plus";

  add_branza = false;

  ikonka_change() {

    if (this.add_branza == false) {
            this.ikonka = "pi pi-plus";
          }
        else {
            this.ikonka = "pi pi-minus";
          }

  }



}
