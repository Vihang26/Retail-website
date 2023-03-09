import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../customer/customer.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {


  
  public jstoday: string='';

//   customers = [
//     {
//       id : 1,
//       name : 'abc',
//       email: 'abc@gmail.com',
//       phoneNo : 65476588 
//   },
//   {
//     id : 2,
//     name : 'sdcs',
//     email: '123@gmail.com',
//     phoneNo : 65476589 
// },
// {
//   id : 3,
//   name : 'dscsd',
//   email: '678@gmail.com',
//   phoneNo : 65476580
// }];

  arr:{id:string, name : string ,email: string, phoneNo: number, address: string, dateTime: string}[] = [];
//  arr! : Customer[];

constructor(){
  console.log('service Module loaded');   
}

   
  customerId = new Subject<number>();

  randomId (){
    let max = 999;
    let min = 100;
    const str1 = 'A'
    let randint = Math.floor(Math.random()* (max-min) + min );
    const randid = str1.concat (String(randint));
    return randid;
  }

  setdata(value:Customer){
    this.jstoday = new Date().toString().slice(0,23);
    let data = {
      id : this.randomId(),
      name: value.name,
      email: value.email, 
      phoneNo:value.phoneNo, 
      address:value.address, 
      dateTime:this.jstoday
    }

    console.log(this.jstoday);
    
    
    this.arr.push(data)
    console.log(this.arr);

    localStorage.setItem("customerData",JSON.stringify(this.arr));
  }
  
  getData (){
    let localItem : string | null;
    localItem = localStorage.getItem("customerData");
    // console.log(this.localItem);
    if(localItem == null){
      this.arr = []
      return this.arr;
    }else{
      this.arr = JSON.parse(localItem);
      // console.log(this.arr);
      return this.arr;
    }
   
  }
 
  sendId(index:number){
      this.customerId.next(index);
  }

  



 
}
