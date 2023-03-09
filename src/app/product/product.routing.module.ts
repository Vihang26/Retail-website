import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { CustomerNewComponent } from "../customer/customer-page/customer-new/customer-new.component";
import { PaynowComponent } from "../payment/paynow/paynow.component";
import { ProductDataComponent } from "./products/product-data/product-data.component";
import { ProductHeaderComponent } from "./products/product-header/product-header.component";

const proroutes: Routes = [    
    {path: '', children:[
        {path: 'nextpage/:id',canActivate:[AuthGuard], component:ProductHeaderComponent},
        {path: 'nextpage/:id/productData',canActivate:[AuthGuard], component:ProductDataComponent},
        // {path: '../customer/customer-page/new/:id', component: CustomerNewComponent},
        {path: 'nextpage/:id/paynow', component: PaynowComponent}
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

export class ProductRoutingModule {
    constructor(){
        console.log('product routing Module loaded');   
      }
}