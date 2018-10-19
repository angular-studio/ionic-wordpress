import { Directive, HostListener } from '@angular/core';
import { Router  } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Directive({
  selector: '[appProductSort]'
})
export class ProductSortDirective {

  @HostListener('click') async ActionSort() {
    console.log('tst');
    const actionSheet =  await this.actionSheetController.create({
      header: 'Sort by',
      buttons: [
      //   {
      //   text: 'Sort by popularity',
      //   role: 'destructive',
      //   handler: () => {
      //     console.log('popularity clicked');
      //   }
      // },
      //  {
      //   text: 'Sort by avarage rating',
      //   handler: () => {
      //     console.log('rating clicked');
      //   }
      // },
       {
        text: 'Sort by new arival',
        handler: () => {
          this.redirect('date');
        }
      },
       {
      //   text: 'Sort by low to high',
      //   handler: () => {
      //     this.redirect('price');
      //   }
      // },
      //  {
      //   text: 'Sort by high to low',
      //   handler: () => {
      //     this.redirect('price-desc');
      //   }
      }
    ]
    });
   await actionSheet.present();
  }

  constructor(
    private actionSheetController: ActionSheetController,
    private router: Router
  ) { }

  redirect(val) {
    this.router.navigate(['/products'], {queryParams: {orderby: val}});
  }

}


