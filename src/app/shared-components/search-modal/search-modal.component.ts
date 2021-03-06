import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { CategoryQuery, WoocommerceCategoriesService } from 'ngx-wooapi';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  categories = [];
  searchString: string;
  constructor(
    private modalControler: ModalController,
    private woocommerceCategoriesService: WoocommerceCategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    const query = {} as CategoryQuery;
    query.hide_empty = true;
    console.log(query);
    this.woocommerceCategoriesService.retrieveCategories(query).subscribe(res => {
      this.categories = res;
    });
  }

  closeModal() {
    this.modalControler.dismiss();
  }

  updateSearchKey(e) {
    this.searchString = e.target.value;
  }

  search() {
    this.router.navigate(['/products'], {queryParams: {search: this.searchString}});
    this.closeModal();
  }

}
