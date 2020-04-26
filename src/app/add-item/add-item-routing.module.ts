import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { AddItemComponent } from './add-item.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'add-item', component: AddItemComponent, data: { title: extract('Add item') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemRoutingModule {}
