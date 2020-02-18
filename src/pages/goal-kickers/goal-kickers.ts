import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommomfunctionProvider } from '../../providers/commomfunction/commomfunction';
import { AjaxProvider } from '../../providers/ajax/ajax';
/**
 * Generated class for the GoalKickersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-kickers',
  templateUrl: 'goal-kickers.html',
})
export class GoalKickersPage {
  public checkTeam: string = "Away Team";
  awaygroup: FormGroup;
  homegroup: FormGroup;
  constructor(private formBuilder: FormBuilder, public ajax: AjaxProvider, public cmnfun: CommomfunctionProvider) {
    this.awaygroup = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      goals: ['', [Validators.required]],
      initial1: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname1: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals1: '',
      initial2: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname2: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals2: '',
      initial3: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname3: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals3: '',
      initial4: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname4: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals4: '',
      initial5: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname5: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals5: ''
    });

    this.homegroup = this.formBuilder.group({
      initial: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      goals: ['', [Validators.required]],
      initial1: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname1: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals1: '',
      initial2: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname2: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals2: '',
      initial3: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname3: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals3: '',
      initial4: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname4: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals4: '',
      initial5: ['', [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(1)]],
      surname5: ['', [Validators.pattern('[a-zA-Z ]*')]],
      goals5: ''
    });
  }

  logForm(val: any, val1: string) {
    val.value.initial1 == "" ? delete val.value.initial1 : val.value.initial1;
    val.value.surname1 == "" ? delete val.value.surname1 : val.value.surname1;
    val.value.goals1 == "" ? delete val.value.goals1 : val.value.goals1;

    val.value.initial2 == "" ? delete val.value.initial2 : val.value.initial2;
    val.value.surname2 == "" ? delete val.value.surname2 : val.value.surname2;
    val.value.goals2 == "" ? delete val.value.goals2 : val.value.goals2;

    val.value.initial3 == "" ? delete val.value.initial3 : val.value.initial3;
    val.value.surname3 == "" ? delete val.value.surname3 : val.value.surname3;
    val.value.goals3 == "" ? delete val.value.goals3 : val.value.goals3;

    val.value.initial4 == "" ? delete val.value.initial4 : val.value.initial4;
    val.value.surname4 == "" ? delete val.value.surname4 : val.value.surname4;
    val.value.goals4 == "" ? delete val.value.goals4 : val.value.goals4;

    val.value.initial5 == "" ? delete val.value.initial5 : val.value.initial5;
    val.value.surname5 == "" ? delete val.value.surname5 : val.value.surname5;
    val.value.goals5 == "" ? delete val.value.goals5 : val.value.goals5;

    // try {
    //   this.cmnfun.showLoading('Please wait...');
    //   this.ajax.setgoalKickers(val.value).subscribe((res: any) => {
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
    console.log(val1, '=>', val.value);
  }

  changeTeam(val: string) {
    this.checkTeam = val;
  }
}
