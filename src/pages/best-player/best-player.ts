import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

/**
 * Generated class for the BestPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-best-player',
  templateUrl: 'best-player.html',
})
export class BestPlayerPage {

  // Team: {Initial:'',Surname:''}
  group: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.group = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }
  logForm() {
    console.log(this.group.value)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BestPlayerPage');
  }
}
