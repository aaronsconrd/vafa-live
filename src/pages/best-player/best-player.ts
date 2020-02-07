import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
  group: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.group = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  logForm(val: any) {
    console.log(val.value);
  }
}
