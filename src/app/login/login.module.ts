import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Route, RouterModule, Routes } from '@angular/router';

const proroutes: Routes =[
  {path:'', children:[
    { path : '',redirectTo:'customer-info', pathMatch:'full'},
 { path : 'customer-info',  component: LoginUserComponent},
  ]}
]

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    RouterModule.forChild(proroutes),
    CommonModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 800,
      positionClass: 'toast-center-center',
    preventDuplicates: true
    })
  ]
})
export class LoginModule { 
  constructor(){
    console.log("login module loaded");
    
  }
}
