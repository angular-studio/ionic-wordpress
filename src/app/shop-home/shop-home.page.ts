import { Component, OnInit } from '@angular/core';
import { 
  WoocommerceProductsService,
  Product
 } from 'ngx-wooapi';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.page.html',
  styleUrls: ['./shop-home.page.scss'],
})
export class ShopHomePage implements OnInit {
  products: Array<Product>;
  constructor(
    private woocommerceProductService: WoocommerceProductsService
  ) { }

  ngOnInit() {
    this.woocommerceProductService.retrieveProducts().subscribe(res => {
      console.log(res);
      this.products = res.products;
    })
  }

}
