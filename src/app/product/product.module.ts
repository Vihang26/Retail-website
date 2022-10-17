import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './products/product-header/product-header.component';
import { ProductBasketComponent } from './products/product-basket/product-basket.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDataComponent } from './products/product-data/product-data.component';  
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe2 } from './products/product-data/filter2.pipe';




@NgModule({
  declarations: [
    ProductHeaderComponent,
    ProductBasketComponent,
    ProductDataComponent,
    FilterPipe2


  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 800,
      preventDuplicates: true
    })
  ]
})
export class ProductModule {
  
 }
