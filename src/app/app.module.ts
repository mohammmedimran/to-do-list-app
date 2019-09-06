import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import {AuthGuard}from './auth.guard';
import { TodoheaderComponent } from './todoheader/todoheader.component';
import { LoginService } from './login.service';
import { TododescriptionComponent } from './tododescription/tododescription.component';
import { TodoHomeBodyComponentComponent } from './todo-home-body-component/todo-home-body-component.component';
import { TodoService } from './todo.service';
import { TodoHomeDateTimeComponentComponent } from './todo-home-date-time-component/todo-home-date-time-component.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TodoHomeComponent,
    TodoheaderComponent,
    TododescriptionComponent,
    TodoHomeBodyComponentComponent,
    TodoHomeDateTimeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard,LoginService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
