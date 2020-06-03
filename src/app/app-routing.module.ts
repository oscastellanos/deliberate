import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { DashviewComponent } from './dashboard/dashview/dashview.component';
import { SystemsListComponent } from './systems/systems-list/systems-list.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'dashboard', component: DashviewComponent},
  { path: 'systemsList', component: SystemsListComponent},
  { path: 'tasks', component: TasksListComponent}, 
  { path: 'todo', component: TodoListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
