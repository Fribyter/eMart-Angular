import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up.component';
import { extract } from '@app/i18n';

const routes: Routes = [{ path: 'sign-up', component: SignUpComponent, data: { title: extract('sign-up') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
