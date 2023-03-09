import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from 'src/app/customer/customer.model';
import { DataservicesService } from 'src/app/service/dataservices.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {

  id:any;
  
  // arr!: Customer[];
  arr!:Customer;
  allData: Customer[];
  localItem!: string | null;

  constructor(private route:ActivatedRoute,private _getdata:DataservicesService,private router: Router){

    this.id=this.route.snapshot.params['id'];
    this.allData = this._getdata.getData();
    const filterd = this.allData.filter(ele => ele.id === this.id);
    this.arr = filterd[0];
    console.log(this.arr);
    
  }

  ngOnInit(){
    // this._getdata.customerId
    // .subscribe(
    //   (id: number) =>{
    //     console.log('fetched id' , id)
    //     // this.id = id
    //   })
    
  }

  goBack(){
    this.router.navigate(['../','customer', 'customer-page', 'existing'])  
  }

  edit(){
    this.router.navigate(['../customer/customer-page/new'])
    console.log(this.id);
  }


}
