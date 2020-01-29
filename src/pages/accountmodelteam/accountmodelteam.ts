import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AccountmodelteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountmodelteam',
  templateUrl: 'accountmodelteam.html',
})
export class AccountmodelteamPage {


  // path:any = 'http://vafalive.com.au/';
  path: any = 'https://vafalive.com.au/';
  // path:any = 'http://v2.vafalive.com.au/';

  head: boolean = true;
  list: any = {};
  type: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.list = navParams.get('list');
    this.type = navParams.get('type');
    this.head = navParams.get('header');
    console.log(this.type);
    console.log(this.list);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionTeamPage');
  }

  itemSelected(item: any) {
    let data = {
      type: '',
      value: ''
    }

    if (item != "Click On Close") {
      data.type = this.type;
      data.value = item;
    }
    this.viewCtrl.dismiss(data);
  }
}
