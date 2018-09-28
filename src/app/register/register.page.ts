import { Component, OnInit } from '@angular/core';
import {
  AuthService
} from 'ngx-wooapi';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nonce; 
  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.authservice.createNonce({
      controller: 'user',
      method: 'register'
    }).subscribe(res => {
      console.log(res);
      this.nonce = res.nonce;
    });

    this.register();
  }
  register() {
    this.authservice.register({
      username: 'prosenjit1',
      email: 'prosenjit+ww1@itobuz.com',
      nonce: 'c6434ab960',
      display_name: 'Prosenjit',
      notify: 'both'
    }).subscribe(res => {
      console.log(res);
    })
  }

}
