import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerExistingComponent } from './customer-page/customer-existing/customer-existing.component';
import { CustomerNewComponent } from './customer-page/customer-new/customer-new.component';
import { FilterPipe } from './customer-page/customer-existing/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';



@NgModule({
  declarations: [
    CustomerPageComponent,
    CustomerExistingComponent,
    CustomerNewComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2FilterPipeModule,
  ],
  exports:[
    CustomerPageComponent
  ]
})
export class CustomerModule { 
  
}
