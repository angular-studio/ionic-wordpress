import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { ProductSortDirective } from './product-sort.directive';

const components = [
  HeaderComponent,
  SearchModalComponent,
  ProductSortDirective
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: components,
  exports: components,
  entryComponents: [
    SearchModalComponent
  ]
})
export class SharedComponentsModule { }
