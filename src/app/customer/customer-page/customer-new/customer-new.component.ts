import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { DataservicesService } from 'src/app/service/dataservices.service';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  id:any;
  editMode = false;
  allData!: Customer[];
  arr!: Customer;
  userModel! : Customer;

  constructor(private _customerData:DataservicesService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params:Params) =>{
          this.id = params['id'];
          console.log(this.id);
          this.editMode = params['id'] != null;
          console.log (this.editMode);
          this.intiForm();
        }
      )


  }


  onSubmit(form:NgForm){
    this._customerData.setdata(form.value);
  //  this.localItem = localStorage.getItem("customerData");
    // this.router.navigate(['../','/nextpage',this.id]),{relativeTo:this.route}

    // this.router.navigate(['../','existing'],{relativeTo:this.route})

    // localStorage.setItem("Date&Time",JSON.stringify(this.jstoday));
    // console.log(this.jstoday);
    
  }

  private intiForm(){
    let id = '';
    let name = '';
    let email = '';
    let phoneNo ;
    let address = '';
    let dateTime = '';
    
    if(this.editMode){
     this.allData = this._customerData.getData();
     const filterd = this.allData.filter(ele => ele.id === this.id);
     this.arr = filterd[0];
     console.log(this.arr);

     this.userModel = this.arr;   
    //  name = this.arr.name;
    //  email = this.arr.email;
    //  phoneNo = this.arr.phoneNo;
    //  address = this.arr.address;
    //  dateTime = this.arr.dateTime;


    }
  }  
}
