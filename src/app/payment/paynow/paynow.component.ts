import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/customer.model';
import { DataservicesService } from 'src/app/service/dataservices.service';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css'],
  providers: [DatePipe]
})


export class PaynowComponent implements OnInit {

  id:any;
  arr!:Customer;
  allData: Customer[];
  localItem!: string | null;

  myDate:any = new Date();


 

  constructor(private route:ActivatedRoute,private _getdata:DataservicesService,private router: Router,private datePipe: DatePipe){


    this.id=this.route.snapshot.params['id'];
    this.allData = this._getdata.getData();
    const filterd = this.allData.filter(ele => ele.id === this.id);
    this.arr = filterd[0];
    console.log(this.arr);
  }

  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || "[]");
      console.log(this.CartDetails);      
    }
  }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
    
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  total: number = 0;
loadCart(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || "[]")
    this.total = this.getCartDetails.reduce(function(acc: number, val: { price: number; quantity: number; }){
      return acc + (val.price * val.quantity); 
    }, 0) ;
  }
}

}
