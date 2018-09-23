import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop-home',
    pathMatch: 'full'
  },
  { path: 'shop-home', loadChildren: './shop-home/shop-home.module#ShopHomePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
