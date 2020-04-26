import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { PurchaseHistoryComponent } from './purchase-history.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'purchase-history', component: PurchaseHistoryComponent, data: { title: extract('Purchase history') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseHistoryRoutingModule {}
