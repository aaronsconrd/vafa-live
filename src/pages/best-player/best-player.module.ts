import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestPlayerPage } from './best-player';

@NgModule({
  declarations: [
    BestPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(BestPlayerPage),
  ],
})
export class BestPlayerPageModule {}
