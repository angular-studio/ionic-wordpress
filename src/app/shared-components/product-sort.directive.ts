import { Directive, HostListener } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Directive({
  selector: '[appProductSort]'
})
export class ProductSortDirective {

  @HostListener('click') async ActionSort() {
    console.log('tst');
    const actionSheet =  await this.actionSheetController.create({
      header: 'Sort by',
      buttons: [{
        text: 'Sort by popularity',
        role: 'destructive',
        handler: () => {
          console.log('popularity clicked');
        }
      }, {
        text: 'Sort by avarage rating',
        handler: () => {
          console.log('rating clicked');
        }
      }, {
        text: 'Sort by new arival',
        handler: () => {
          console.log('new arival clicked');
        }
      }, {
        text: 'Sort by low to high',
        handler: () => {
          console.log('1 clicked');
        }
      , {
        text: 'Sort by high to low',
        handler: () => {
          console.log('2 clicked');
        }
      }]
    });
   await actionSheet.present();
  }

  constructor(
    public actionSheetController: ActionSheetController
  ) { }

}


