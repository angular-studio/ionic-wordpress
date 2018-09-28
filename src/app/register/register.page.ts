import { Component, OnInit } from '@angular/core';
import {
  AuthService
} from 'ngx-wooapi';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authservice: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      display_name: ['', Validators.required],
      email: ['', Validators.required],
      user_pass: ['', Validators.required],
      nonce: ['', Validators.required],
      notify: ['both']
    });
    this.authservice.createNonce({
      controller: 'user',
      method: 'register'
    }).subscribe(res => {
      console.log(res);
      this.registerForm.get('nonce').patchValue(res.nonce);
    });
  }
  register() {
    console.log(this.registerForm.value);
    this.authservice.register(this.registerForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
