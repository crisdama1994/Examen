import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputexaPage } from './inputexa.page';

const routes: Routes = [
  {
    path: '',
    component: InputexaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputexaPageRoutingModule {}
