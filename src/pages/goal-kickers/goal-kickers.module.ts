import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalKickersPage } from './goal-kickers';

@NgModule({
  declarations: [
    GoalKickersPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalKickersPage),
  ],
})
export class GoalKickersPageModule {}
