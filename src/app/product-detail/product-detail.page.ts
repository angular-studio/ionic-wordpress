import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import {
  WoocommerceProductsService
 } from 'ngx-wooapi';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productDetail;
  icons = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private woocommerceProductService: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.woocommerceProductService.retrieveProduct(+params.get('id')))
    )
    .subscribe(res => {
      this.productDetail = res;
      const rating = res.rating_count;
      for (let i = 1; i <= rating; i++) {
        this.icons.push('star');
      }
    });
  }

}
