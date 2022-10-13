import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginUserComponent } from './login/login-user/login-user.component';

const routes:Routes = [
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(x => x.LoginModule)},
 
 { path: 'customer',
    loadChildren: () => import('./customer/customer.routing.module').then(x => x.customerRoutingModule)},
 
   { path: 'products',
    loadChildren: () => import('./product/product.routing.module').then(x => x.ProductRoutingModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 
  constructor(){
    console.log('approuting Module loaded');
    
  }
}
