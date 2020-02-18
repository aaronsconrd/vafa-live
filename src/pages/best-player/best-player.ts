import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AjaxProvider } from '../../providers/ajax/ajax';
import { CommomfunctionProvider } from '../../providers/commomfunction/commomfunction';

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
  public checkTeam: string = "Away Team";
  homegroup: FormGroup;
  awaygroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public ajax: AjaxProvider, public cmnfun: CommomfunctionProvider) {

    this.awaygroup = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      initial1: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname1: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial2: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname2: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial3: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname3: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial4: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname4: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial5: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname5: ['', [Validators.pattern('[a-zA-Z ]*')]],
    });

    this.homegroup = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      initial1: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname1: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial2: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname2: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial3: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname3: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial4: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname4: ['', [Validators.pattern('[a-zA-Z ]*')]],
      initial5: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname5: ['', [Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  logForm(val: any) {

    val.value.initial1 == "" ? delete val.value.initial1 : val.value.initial1;
    val.value.surname1 == "" ? delete val.value.surname1 : val.value.surname1;

    val.value.initial2 == "" ? delete val.value.initial2 : val.value.initial2;
    val.value.surname2 == "" ? delete val.value.surname2 : val.value.surname2;

    val.value.initial3 == "" ? delete val.value.initial3 : val.value.initial3;
    val.value.surname3 == "" ? delete val.value.surname3 : val.value.surname3;

    val.value.initial4 == "" ? delete val.value.initial4 : val.value.initial4;
    val.value.surname4 == "" ? delete val.value.surname4 : val.value.surname4;

    val.value.initial5 == "" ? delete val.value.initial5 : val.value.initial5;
    val.value.surname5 == "" ? delete val.value.surname5 : val.value.surname5;

    console.log(val.value);

    // try {
    //   this.cmnfun.showLoading('Please wait...');
    //   this.ajax.setBestPlayers(val.value).subscribe((res: any) => {
    //     this.cmnfun.HideLoading();
    //     if (res.response == 1) {
    //       // Show any message
    //     } else {
    //       this.cmnfun.showToast('');
    //     }
    //   }, error => {
    //     console.log(error);
    //     this.cmnfun.showToast('');
    //   })
    // } catch (error) {
    //   console.error('Error => ', error);
    //   this.cmnfun.showToast('');
    // }
    
  }
  
  changeTeam(val: string) {
    this.checkTeam = val;
  }
}
