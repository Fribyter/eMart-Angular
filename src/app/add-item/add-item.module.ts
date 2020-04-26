import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';

@NgModule({
  declarations: [AddItemComponent],
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, I18nModule, AddItemRoutingModule],
})
export class AddItemModule {}
