import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingPageRoutingModule } from './upcoming-routing.module';

import { UpcomingPage } from './upcoming.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingPageRoutingModule,
    ComponentModule
  ],
  declarations: [UpcomingPage]
})
export class UpcomingPageModule {}
