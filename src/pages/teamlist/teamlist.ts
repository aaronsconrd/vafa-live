import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TeamlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamlist',
  templateUrl: 'teamlist.html',
})
export class TeamlistPage {
  items: any = [];
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.items = navParams.get('items');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamlistPage');
  }

  itemSelected(item: any) {
    if (item == "Click On Close") {
      this.viewCtrl.dismiss();
    } else {
      this.viewCtrl.dismiss(item);
    }
  }
}
