import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClubAdminPage } from './club-admin';

@NgModule({
  declarations: [
    ClubAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(ClubAdminPage),
  ],
})
export class ClubAdminPageModule {}
