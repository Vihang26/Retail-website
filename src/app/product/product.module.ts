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
import { CustomerNewComponent } from '../customer/customer-page/customer-new/customer-new.component';
import { CustomerModule } from '../customer/customer.module';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 800,
      preventDuplicates: true
    }),
    CustomerModule
  ]
})
export class ProductModule {
  
 }
