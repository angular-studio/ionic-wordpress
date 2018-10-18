import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPage } from './product-detail.page';
import { IwUiModule } from './../iw-ui/iw-ui.module';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IwUiModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
