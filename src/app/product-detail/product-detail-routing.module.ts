import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'product-detail/:id', component: ProductDetailComponent, data: { title: extract('Product detail') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailRoutingModule {}
