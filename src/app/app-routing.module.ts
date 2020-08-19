import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';
import { ErrorComponent } from './error/error.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from '../app/home/home.component';
import { RouteGuardService } from '../app/service/route-guard.service';

const routes: Routes = [
  {path:'', component: GreetComponent, canActivate:[RouteGuardService]},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'welcome/:name', component:GreetComponent, canActivate:[RouteGuardService]},
  {path:'todos', component:TodosListComponent, canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
