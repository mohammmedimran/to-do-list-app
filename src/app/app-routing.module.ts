import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Home",component:HomeComponent},
  {path:"todohome",component:TodoHomeComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,HomeComponent,TodoHomeComponent]