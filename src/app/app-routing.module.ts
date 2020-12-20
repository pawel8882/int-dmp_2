import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ObjektyComponent } from './objekty/objekty.component';
import { ProjektNaviComponent } from './projekt-navi/projekt-navi.component';


const routes: Routes = [
  { path: 'app-objekty', component: ObjektyComponent },
  { path: 'strona_glowna', component: AppComponent },
  { path: 'reset', redirectTo: '/' },
  { path: 'projekt-navi', component: ProjektNaviComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
