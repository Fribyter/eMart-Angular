import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerInventoryRoutingModule } from './seller-inventory-routing.module';
import { SellerInventoryComponent } from './seller-inventory.component';

@NgModule({
  declarations: [SellerInventoryComponent],
  imports: [CommonModule, SellerInventoryRoutingModule],
})
export class SellerInventoryModule {}
