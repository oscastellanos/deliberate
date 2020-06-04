import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { DashviewComponent } from './dashboard/dashview/dashview.component';
import { SystemsListComponent } from './systems/systems-list/systems-list.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent},
  { path: 'dashboard', component: DashviewComponent, canActivate: [AuthGuard]},
  { path: 'systemsList', component: SystemsListComponent, canActivate: [AuthGuard]},
  { path: 'tasks', component: TasksListComponent, canActivate: [AuthGuard]}, 
  { path: 'todo', component: TodoListComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
