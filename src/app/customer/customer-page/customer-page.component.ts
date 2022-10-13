import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
  }

  onNewCustomer(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  onExistingCustomer(){
    this.router.navigate(['existing'],{relativeTo:this.route})
  }

  gotoLogin(){
    localStorage.removeItem('loginKey');
    this.router.navigate(['../customer-info'])
  }
}

  


