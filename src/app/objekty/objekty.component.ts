import { Component, NgModule, OnInit } from '@angular/core';
import { Projekt } from '../projekt';
import { ProjektyService } from '../projekty.service';
import { FormControl } from '@angular/forms';
import { find } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ProjektDetails } from '../projektdetails';


@Component({
  selector: 'app-objekty',
  templateUrl: './objekty.component.html',
  styleUrls: ['./objekty.component.css']
})




export class ObjektyComponent implements OnInit {


  ngOnInit() {
    this.showProjekt();
  }
  time = new Date();

  projekty!: Projekt[];

  oneprojekt!: Projekt;

  oneprojekt_detail = new Object() as ProjektDetails;

  display = false;

  showDialog() {
    this.display = true;
  }


  constructor(private projektservice: ProjektyService) { }


  showProjekt(): void {
    this.projektservice.getProjekty().subscribe((projekt => this.projekty = projekt));
  }

  getOneProjekt(id: number): void {
    var sub = new Subject();
    sub.subscribe(
      { next: (projekt => this.oneprojekt = projekt as Projekt) });
    sub.subscribe(
      { next: (projekt => this.oneprojekt_detail = (projekt as Projekt).projektDetails.find(detal => detal.projektID === id) as ProjektDetails)});

    this.projektservice.getProjekt(id).subscribe(sub);
  }

  add(name: string, numer: string): void {
    if (!name) { return; }
    if (!numer) { return; }
    const isComplete = false;
    this.projektservice.addProjekt({ name, numer, isComplete } as Projekt)
      .subscribe(_projekt => {
        this.showProjekt();
      })
  };

  delete_projekt(name: string): void {
    if (!name) { return; }
    this.projektservice.deleteProjekt(this.projekty.find(projekt => projekt.name === name) as Projekt).subscribe(_projekt => { this.showProjekt() })
  }
}



