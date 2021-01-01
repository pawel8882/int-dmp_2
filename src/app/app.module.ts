import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjektyComponent } from './objekty/objekty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProjektNaviComponent } from './projekt-navi/projekt-navi.component';
import { ToolbarModule } from 'primeng/toolbar';

import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
import { MatListModule } from '@angular/material/list';

import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';




@NgModule({
  declarations: [
    AppComponent,
    ObjektyComponent,
    ProjektNaviComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    ToolbarModule,
    SlideMenuModule,
    InputTextModule,
    MatListModule,
    PanelMenuModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
