
import { IonicPage, NavController } from 'ionic-angular';
import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { LockScreenModule, LockScreenComponent } from 'ionic-simple-lockscreen';
import { AjaxProvider } from '../../providers/ajax/ajax';
import { LocalDataProvider } from '../../providers/local-data/local-data';
import { LiveScorePage } from '../live-score/live-score';

/**
 * Generated class for the ClubAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-club-admin',
  templateUrl: 'club-admin.html',
})
export class ClubAdminPage {
  @Input() pagetitle: String = "Enter Pin";
  pin: string = "";

  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  constructor(public navCtrl: NavController,public ajax: AjaxProvider, public localData: LocalDataProvider) {
  }

  emitEvent() {
    this.change.emit(this.pin);
  }

  handleInput(pin: string) {
    this.pin += pin;
    if (this.pin.length === 4) {
      return this.checkPin();
    }
  }
  
  checkPin() {
    // this.ajax.CheckPasscode(this.pin).subscribe((res) => {
    //   console.log('res', res)
    // });
    this.navCtrl.push(LiveScorePage);
  }

  remove() {
    this.pin = this.pin.substring(0, this.pin.length - 1);
  }
}
