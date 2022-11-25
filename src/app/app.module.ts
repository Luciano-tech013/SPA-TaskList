import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/tasks-list/task-list.component';
import { RealizeTasksComponent } from './components/realize-tasks/realize-tasks.component';
import { TasklistAboutComponent } from './components/tasklist-about/tasklist-about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasklistContactComponent } from './components/tasklist-contact/tasklist-contact.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksFormComponent } from './components/tasks-form/tasks-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    RealizeTasksComponent,
    TasklistAboutComponent,
    TasklistContactComponent,
    TasksFormComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
