import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginData: any;
  users: any;
  result: any;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) { 

    this.loginData = [
      {
        email: 'freya@gmail.com',
        password: 'freya@123'
      },
      {
        email: 'abc@gmail.com',
        password: 'abc@123'
      }];
  
      localStorage.setItem("logindata",JSON.stringify(this.loginData));
      // console.log(this.loginData);
      
  }
  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const data = form.value;
    this.users = JSON.parse(localStorage.getItem("logindata")|| "[]");
    this.result = this.users.find((customer: { email: string; password: string; }) =>
    customer.email === data.email && customer.password === data.password);

    if(this.result){
      this.router.navigate(['customer/customer-page'])
      localStorage.setItem("loginKey",JSON.stringify(true));
    }
    else{
      this.toastr.error("Please enter valid data");
      
    }
    
  }

}
