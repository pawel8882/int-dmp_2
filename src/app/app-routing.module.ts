import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjektNaviComponent } from './projekt-navi/projekt-navi.component';
import { MessagesComponent } from './projekt-navi/messages/messages.component';
import { SentMessagesComponent } from './projekt-navi/messages/sent-messages/sent-messages.component';
import { AllMessagesComponent } from './projekt-navi/messages/all-messages/all-messages.component';
import { NewMessageComponent } from './projekt-navi/messages/new-message/new-message.component';
import { OneMessageComponent } from './projekt-navi/messages/one-message/one-message.component';
import { PinMessagesComponent } from './projekt-navi/messages/pin-messages/pin-messages.component';
import { CustomMessagesComponent } from './projekt-navi/messages/custom-messages/custom-messages.component';
import { LoggingTimeComponent } from './logging-time/logging-time.component';
import { ReplyEditorComponent } from './projekt-navi/messages/one-message/reply-editor/reply-editor.component';


const routes: Routes = [
  { path: 'logging', component: LoggingTimeComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'strona_glowna', component: AppComponent },
  { path: 'reset', redirectTo: '' },
  {
    path: 'projekt-navi', component: ProjektNaviComponent,
    children: [
      {
        path: 'messages', component: MessagesComponent,
        children: [
          { path: 'SentMessages', component: SentMessagesComponent },
          { path: 'ReceivedMessages', component: AllMessagesComponent },
          { path: 'NewMessage', component: NewMessageComponent },
          { path: 'OneMessage', component: OneMessageComponent, children: [{ path: 'reply', component: ReplyEditorComponent}] },
          { path: 'PinMessages', component: PinMessagesComponent },
          { path: 'CustomMessages', component: CustomMessagesComponent },
        ]
      }
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
