import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistAboutComponent } from './components/tasklist-about/tasklist-about.component';
import { TasklistContactComponent } from './components/tasklist-contact/tasklist-contact.component';
import { TasksComponent } from './components/tasks/tasks.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: TasksComponent },
  {path: 'about', component: TasklistAboutComponent },
  {path: 'contact', component: TasklistContactComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
