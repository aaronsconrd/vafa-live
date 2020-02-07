import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FileTransfer } from '@ionic-native/file-transfer';
import { analyzeAndValidateNgModules } from '@angular/compiler';

/**
 * Generated class for the LiveScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-score',
  templateUrl: 'live-score.html',
})
export class LiveScorePage {

  hideMe: boolean = false;
  hidePlay: boolean = true;
  hideQuarter: boolean = true;
  showQuarter: boolean = false;
  htPoint: boolean = false;
  atPoint: boolean = false;
  flag: boolean = false;
  Point: boolean = true;
  timeInSeconds: any;
  time: any;
  runTimer: any;
  hasStarted: any;
  hasFinished: any;
  remainingTime: any;
  displayTime: any;
  Ghome: any = 9;
  Bhome: any = 2;
  Gaway: any = 6;
  Baway: any = 8;
  constructor(public navCtrl: NavController, public navParams: NavParams, public screenOrientation: ScreenOrientation, private alertCtrl: AlertController) {
  }


  scoreBtn(event) {
    console.log('val', event.path[2].id);
    let selId = event.path[2].id;
    console.log('time', this.timeInSeconds);
    console.log('remaining', this.remainingTime);
    if (this.timeInSeconds == this.remainingTime) {
      this.scoreConfirm();
    } else {
      switch (selId) {
        case 'GhomeA': {
          this.Ghome = this.Ghome + 1;
          break;
        }
        case 'BhomeA': {
          this.Bhome = this.Bhome + 1;
          break;
        }
        case 'GhomeM': {
          this.Ghome = this.Ghome - 1;
          break;
        }
        case 'BhomeM': {
          this.Bhome = this.Bhome - 1;
          break;
        }
        case 'GawayA': {
          this.Gaway = this.Gaway + 1;
          break;
        }
        case 'BawayA': {
          this.Baway = this.Baway + 1;
          break;
        }
        case 'GawayM': {
          this.Gaway = this.Gaway - 1;
          break;
        }
        case 'BawayM': {
          this.Baway = this.Baway - 1;
          break;
        }
      }
    }
  }
  scoreConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Start Timer/ Match to enter scores',
      // message: 'Do you want to buy this book?',
      cssClass: 'CusttoastCtrl',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Ok clicked');
          }
        },
      ]
    });
    alert.present();
  }

  play() {
            if(this.timeInSeconds == this.remainingTime){
              this.playConfirm();
  }   else{
      this.hideMe = !this.hideMe;
      this.hidePlay = !this.hidePlay;
      this.hideQuarter = this.hideQuarter;
      this.showQuarter = this.showQuarter;
      this.htPoint = true;
      this.atPoint = true;
      this.Point = false;
      if (this.flag == false) {
        this.initTimer();
        this.startTimer();
        this.flag = true;
      } else {
        this.startTimer();
      }
    }
    console.log('play', this.displayTime);
  }

  playConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Do you want to Start this quarter',
      cssClass: 'CusttoastCtrl',
      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
              this.hideMe = !this.hideMe;
              this.hidePlay = !this.hidePlay;
              this.hideQuarter = !this.hideQuarter;
              this.showQuarter = !this.showQuarter;
              this.htPoint = !this.htPoint;
              this.atPoint = !this.atPoint;
              this.Point = !this.Point;
              if (this.flag == false) {
                this.initTimer();
                this.startTimer();
                this.flag = true;
              } else {
                this.startTimer();
              }
          }
        }
      ]
    });
    alert.present();
  }

  pause() {
    this.hideMe = !this.hideMe;
    this.hidePlay = !this.hidePlay;
    this.runTimer = false;
    console.log('pause', this.displayTime);

  }
  stop() {
    this.stopConfirm();
    this.runTimer = false;
  }
  stopConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Do you want to end this quarter',
      // message: 'Do you want to buy this book?',
      cssClass: 'CusttoastCtrl',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.startTimer();
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.displayTime = null;
            this.hideMe = !this.hideMe;
            this.hidePlay = !this.hidePlay;
            this.flag = false;
            this.htPoint= !this.htPoint;
            this.atPoint =!this.atPoint;
            this.Point = true;
          }
        }
      ]
    });
    alert.present();
  }

  exit() {
    this.exitConfirm();
  }
  exitConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure you want to exit',
      cssClass: 'CusttoastCtrl',

      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  initTimer() {
    // Pomodoro is usually for 25 minutes
    if (!this.timeInSeconds) {
      this.timeInSeconds = 50;
    }

    this.time = this.timeInSeconds;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.remainingTime = this.timeInSeconds;
    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
  }

  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }

  //  pauseTimer() {
  //    this.runTimer = false;
  //  }
  //  resumeTimer() {
  //    this.startTimer();
  //  }

  timerTick() {
    setTimeout(() => {
      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.hasFinished = true;
      }
      // console.log(':::', this.remainingTime);
      if (this.remainingTime == 0) {
        this.endConfirm();
      }
    }, 1000);
  }
  endConfirm() {
    let alert = this.alertCtrl.create({
      title: 'End Quarter',
      cssClass: 'CusttoastCtrl',
      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.hideMe = !this.hideMe;
            this.hidePlay = !this.hidePlay;
            this.timeInSeconds = 10;
            this.initTimer();
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    //  hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveScorePage');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    // console.log('...', this.screenOrientation.type);
    this.timeInSeconds = 25;
    this.initTimer();
    // this.scoresConfirm();
  }
  ionViewDidLeave() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
  scoresConfirm() {
    let confirm = this.alertCtrl.create({
      cssClass: 'CusttoastCtrl',
      // title: 'End Quarter',
      // message: 'Do you want to buy this book?',
      buttons: [
        {
          text: 'UPDATE SCORES',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'UPDATE BEST PLAYERS',
          handler: () => {
            this.navCtrl.push('BestPlayerPage');
            console.log('Buy clicked');
          }
        },
        {
          text: 'UPDATE GOAL KICKERS',
          handler: () => {
            this.navCtrl.push('GoalKickersPage');
            console.log('Buy clicked');
          }
        },
        {
          text: 'EXIT',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
