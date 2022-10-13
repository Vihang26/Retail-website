import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { CustomerExistingComponent } from "./customer-page/customer-existing/customer-existing.component";
import { CustomerNewComponent } from "./customer-page/customer-new/customer-new.component";
import { CustomerPageComponent } from "./customer-page/customer-page.component";

const proroutes: Routes = [
  {path: '', children:[
  { path : 'customer-page',canActivate:[AuthGuard],  component: CustomerPageComponent, children:[
    {path: 'new', component: CustomerNewComponent},
    {path : 'existing', component: CustomerExistingComponent},
  ]},
]}
  ];
@NgModule({
    imports : [
        RouterModule.forChild(proroutes)
    ],
    exports : [
        RouterModule
    ]
})

export class customerRoutingModule {
  constructor(){
    console.log('customer routing Module loaded');   
  }
}