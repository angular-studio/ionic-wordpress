import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedComponentsModule } from '../shared-components/shared.components.module';
import { ShopListPage } from './shop-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShopListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule
  ],
  declarations: [ShopListPage]
})
export class ShopListPageModule {}
