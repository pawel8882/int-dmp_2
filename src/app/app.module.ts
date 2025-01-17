import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProjektNaviComponent } from './projekt-navi/projekt-navi.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'; 

import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
import { MatListModule } from '@angular/material/list';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { InplaceModule } from 'primeng/inplace';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';


import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { MessagesComponent } from './projekt-navi/messages/messages.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NewMessageComponent } from './projekt-navi/messages/new-message/new-message.component';
import { PinMessagesComponent } from './projekt-navi/messages/pin-messages/pin-messages.component';
import { AllMessagesComponent } from './projekt-navi/messages/all-messages/all-messages.component';
import { CustomMessagesComponent } from './projekt-navi/messages/custom-messages/custom-messages.component';
import { SentMessagesComponent } from './projekt-navi/messages/sent-messages/sent-messages.component';
import { OneMessageComponent } from './projekt-navi/messages/one-message/one-message.component';
import { LoggingTimeComponent } from './logging-time/logging-time.component';
import { ReplyEditorComponent } from './projekt-navi/messages/one-message/reply-editor/reply-editor.component';
import { PaginatorComponent } from './projekt-navi/messages/paginator/paginator.component';
import { ProjectWorkComponent } from './projekt-navi/project-work/project-work.component';

import { ProjectWorkService } from 'src/app/_services/SharedServices/project-work.service';
import { SharedMessagesComponent } from './projekt-navi/project-work/shared-messages/shared-messages.component';
import { TasksComponent } from './projekt-navi/project-work/tasks/tasks.component';
import { ScheduleComponent } from './projekt-navi/project-work/schedule/schedule.component';
import { ShortMessagesComponent } from './projekt-navi/project-work/short-messages/short-messages.component';
import { ProjectDocumentationComponent } from './projekt-navi/project-documentation/project-documentation.component';
import { DocumentationComponent } from './projekt-navi/project-documentation/documentation/documentation.component';
import { ProjectScheduleComponent } from './projekt-navi/project-schedule/project-schedule.component';
import { PersonalCalendarComponent } from './projekt-navi/personal-calendar/personal-calendar.component';
import { MessageDetailComponent } from './projekt-navi/messages/one-message/message-detail/message-detail.component';
import { AddFilesComponent } from './projekt-navi/project-documentation/add-files/add-files.component';
import { ListFilesComponent } from './projekt-navi/project-documentation/documentation/list-files/list-files.component';




@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjektNaviComponent,
    MessagesComponent,
    NewMessageComponent,
    PinMessagesComponent,
    AllMessagesComponent,
    CustomMessagesComponent,
    SentMessagesComponent,
    OneMessageComponent,
    LoggingTimeComponent,
    ReplyEditorComponent,
    PaginatorComponent,
    ProjectWorkComponent,
    SharedMessagesComponent,
    TasksComponent,
    ScheduleComponent,
    ShortMessagesComponent,
    ProjectDocumentationComponent,
    DocumentationComponent,
    ProjectScheduleComponent,
    PersonalCalendarComponent,
    MessageDetailComponent,
    AddFilesComponent,
    ListFilesComponent

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
    PanelModule,
    MatTabsModule,
    TableModule,
    EditorModule,
    FormsModule,
    AutoCompleteModule,
    FileUploadModule,
    ToastModule,
    MessageModule,
    MessagesModule,
    BadgeModule,
    InplaceModule,
    ProgressSpinnerModule,
    MatPaginatorModule,
    DropdownModule,
    MultiSelectModule,
    MatIconModule,
    OverlayPanelModule,
    TreeModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
