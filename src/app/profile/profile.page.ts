import { Component, OnInit } from '@angular/core';
import { WoocommerceCustomerService } from 'ngx-wooapi';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  token;
  constructor(
    private wooCustomerService: WoocommerceCustomerService
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {};
  }

}
