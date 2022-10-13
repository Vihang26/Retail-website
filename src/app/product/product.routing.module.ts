import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { ProductDataComponent } from "./products/product-data/product-data.component";
import { ProductHeaderComponent } from "./products/product-header/product-header.component";

const proroutes: Routes = [    
    {path: '', children:[
        {path: 'nextpage/:id',canActivate:[AuthGuard], component:ProductHeaderComponent},
        {path: 'nextpage/:id/productData',canActivate:[AuthGuard], component:ProductDataComponent},
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