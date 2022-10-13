import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { DataservicesService } from './service/dataservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomerModule,
    AppRoutingModule,
    ProductModule,
    BrowserAnimationsModule,
    LoginModule
  ],
  providers: [
    DataservicesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
