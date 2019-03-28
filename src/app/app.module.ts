import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {Routes,RouterModule,RouterOutlet}  from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListComponent } from './list/list.component';
import { DashboardDetailsComponent } from './dash-board/dashboard-details/dashboard-details.component';
import { ListDetailsComponent } from './list/list-details/list-details.component'
import { AuthCheck } from './AuthCheck';
import { AuthService } from './AuthenticationService';
import { LoginComponent } from './login/login.component';
import{ReactiveFormsModule} from '@angular/forms'
import { DataResolver } from './dataResolver';
const routes:Routes=[
  {
  path:"Dashboard",canActivate:[AuthService],resolve:{resolver:DataResolver},
  component:DashBoardComponent,
},
{
  path:"list", canActivate:[AuthService],
  component:ListComponent,children:[ 
  ]
},
{
  path:"details",
  component:DashboardDetailsComponent
},
{
  path:"list/details",
  component:ListDetailsComponent
},
{
  path:"login",
  component:LoginComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ListComponent,
    DashboardDetailsComponent,
    ListDetailsComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule

  ],
  providers: [DataService,AuthCheck,AuthService,DataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
