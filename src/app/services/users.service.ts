import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { WoocommerceHelperService } from 'ngx-wooapi';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private wooHelperService: WoocommerceHelperService
  ) { }

  me() {
    return this.http.get('wp/users/me')
    .pipe(catchError(err => this.wooHelperService.handleError(err)));
  }

  getuser(id) {
    return this.http.get(`wp/users/${id}`)
    .pipe(catchError(err => this.wooHelperService.handleError(err)));
  }
}
