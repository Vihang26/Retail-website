import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaynowComponent } from './paynow/paynow.component';
import { Routes } from '@angular/router';
import { CustomerPageComponent } from '../customer/customer-page/customer-page.component';

const proroutes: Routes = [
  { path : 'Done',  component: CustomerPageComponent}
  ];


@NgModule({
  declarations: [
    PaynowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
