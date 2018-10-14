import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  WoocommerceProductsService,
  Product,
  ProductQuery
 } from 'ngx-wooapi';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {
  products: Array<Product> = [];
  headers;
  query: ProductQuery = {
    page : 1
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private woocommerceProductService: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.query = Object.keys(params).length ? Object.assign(this.query, params) : {
        page: 1
      } ;
      console.log('query', params, this.query);

      if (params) {
        this.getproducts(this.query);
        this.products = [];
      } else {
        this.getproducts();
      }
    });
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
