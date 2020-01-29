import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FirebaseAnalyticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAnalyticsProvider {

  constructor(
    private platform: Platform,
    private firebaseAnalytics: FirebaseAnalytics
  ) {
  }

  /**
   * Tracks an 'screen_view' event in Firebase Analytics
   * @param screeName Screen View
   */
  trackView(screeName: any) {
    this.platform.ready().then(() => {
      this.firebaseAnalytics.setCurrentScreen(screeName);
    });
  }

  /**
   * Tracks a custom event in Firebase Analytics
   * @param eventName Name of the event For eg. "Login", "Logout", "SignUp"
   * @param eventParams Optional set '' if no Params otherwise pass Object
   */
  trackEvent(eventName: any, eventParams: any) {
    if (eventParams == '') {
      eventParams = {};
    }
    this.platform.ready().then(() => {
      this.firebaseAnalytics.logEvent(eventName, eventParams);
    });
  }
}
