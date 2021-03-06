import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
  constructor(public navCtrl: NavController, public screenOrientation: ScreenOrientation, private alertCtrl: AlertController) {
  }

  scoreBtn(event: string) {
    if (this.timeInSeconds == this.remainingTime) {
      this.scoreConfirm();
    } else {
      switch (event) {
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
    if (this.timeInSeconds == this.remainingTime) {
      this.playConfirm();
    } else {
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
  }

  playConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Do you want to Start this quarter',
      cssClass: 'CusttoastCtrl',
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
  }

  stop() {
    this.stopConfirm();
    this.runTimer = false;
  }

  stopConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Do you want to end this quarter',
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
            this.htPoint = !this.htPoint;
            this.atPoint = !this.atPoint;
            this.Point = true;
          }
        }
      ]
    });
    alert.present();
  }

  exitConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Are you sure you want to exit',
      cssClass: 'CusttoastCtrl',
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
            this.scoresConfirm();
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
      if (this.remainingTime == 0) {
        this.endConfirm();
      }
    }, 1000);
  }
  endConfirm() {
    let alert = this.alertCtrl.create({
      title: 'End Quarter',
      cssClass: 'CusttoastCtrl',
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
    let sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    let minutesString = '';
    let secondsString = '';
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
  }

  ionViewDidLoad() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.timeInSeconds = 25;
    this.initTimer();
  }

  ionViewDidLeave() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  scoresConfirm() {
    let confirm = this.alertCtrl.create({
      cssClass: 'CusttoastCtrl',
      buttons: [
        {
          text: 'UPDATE SCORES',
          handler: () => {
            console.log('UPDATE SCORES CLICK');
          }
        },
        {
          text: 'UPDATE BEST PLAYERS',
          handler: () => {
            this.navCtrl.push('BestPlayerPage');
            console.log('UPDATE BEST PLAYERS CLICK');
          }
        },
        {
          text: 'UPDATE GOAL KICKERS',
          handler: () => {
            this.navCtrl.push('GoalKickersPage');
            console.log('UPDATE GOAL KICKERS CLICK');
          }
        },
        {
          text: 'EXIT',
          role: 'cancel',
          handler: () => {
            console.log('EXIT clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
