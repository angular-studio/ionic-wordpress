import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: components,
  exports: components
})
export class SharedComponentsModule { }
