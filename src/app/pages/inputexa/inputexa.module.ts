import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputexaPageRoutingModule } from './inputexa-routing.module';

import { InputexaPage } from './inputexa.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputexaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InputexaPage]
})
export class InputexaPageModule {}
