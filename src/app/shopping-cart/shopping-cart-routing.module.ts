import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ShoppingCartComponent } from './shopping-cart.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'shopping-cart', component: ShoppingCartComponent, data: { title: extract('Shopping cart') } },
  ]),
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
