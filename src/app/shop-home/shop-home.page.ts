import { Component, OnInit } from '@angular/core';
import {
  WoocommerceProductsService,
  Product,
  ProductQuery
 } from 'ngx-wooapi';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.page.html',
  styleUrls: ['./shop-home.page.scss'],
})
export class ShopHomePage implements OnInit {
  products: Array<Product> = [];
  headers;
  query: ProductQuery;

  constructor(
    private woocommerceProductService: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.query = {};
    this.query.page = 1;
    this.getproducts();
  }

  loadData(res) {
    console.log(res);
    this.query.page ++;
    console.log(this.query);
    this.getproducts(this.query, res);
  }

  getproducts(query?, scroll?) {
    this.woocommerceProductService.retrieveProducts(query).subscribe(res => {
      console.log(res);
      this.products = this.products.concat(res.products);
      this.headers = res.headers;
      if (scroll) {
        scroll.target.complete();
      }
    });
  }

}
