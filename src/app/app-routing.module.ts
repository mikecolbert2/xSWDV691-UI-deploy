import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UserManagerComponent } from './components/pages/admin/user-manager/user-manager.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'admin/user-manager', component: UserManagerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
