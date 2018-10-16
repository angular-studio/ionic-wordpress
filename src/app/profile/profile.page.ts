import { Component, OnInit } from '@angular/core';
import { WoocommerceCustomerService } from 'ngx-wooapi';
import { UsersService } from '../services/users.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  token;
  constructor(
    private wooCustomerService: WoocommerceCustomerService,
    private customerService: WoocommerceCustomerService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.me()
    .pipe(switchMap(user => this.customerService.retriveCustomers(user.id)))
    .subscribe(res => {
      this.token = res;
    });
  }

}
