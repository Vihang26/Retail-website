import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-basket',
  templateUrl: './product-basket.component.html',
  styleUrls: ['./product-basket.component.css']
})
export class ProductBasketComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }

  productData(){
    this.router.navigate(['productData'],{relativeTo:this.route});
  }

  

  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || "[]");
      // console.log(this.CartDetails);      
    }
  }

  forDelete(id:number){ 
    this.getCartDetails.splice(id, 1);
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  inc(prodId: any, quantity: any){
    for(let i=0 ; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId){
        if(quantity !=5){
          this.getCartDetails[i].quantity = parseInt(quantity) + 1;
        }
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();
  }

  dec(prodId: any, quantity: any){
    for(let i=0 ; i<this.getCartDetails.length; i++){
      if(this.getCartDetails[i].prodId === prodId){
        if(quantity !=1){
          this.getCartDetails[i].quantity = parseInt(quantity) - 1;
        }
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();
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