import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { SellerInventoryComponent } from './seller-inventory.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'seller-inventory', component: SellerInventoryComponent, data: { title: extract('Seller inventory') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerInventoryRoutingModule {}
