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
  ratingResponse;
  rating;

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
      this.ratingResponse = res.rating_count;
      this.rating = this.getRating();
      console.log('ratingResponse', this.ratingResponse);
      console.log('productDetail', this.productDetail);
    });
  }

  getRating() {
    return this.ratingResponse ? this.ratingResponse * 20 + '%' : 0 +  '%';
  }

}
