import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { SearchModalComponent } from './search-modal/search-modal.component';

const components = [
  HeaderComponent,
  SearchModalComponent
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
