import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchModalComponent } from '../search-modal/search-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
