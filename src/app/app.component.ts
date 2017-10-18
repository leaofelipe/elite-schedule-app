import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MyTeamsPage} from '../pages/MyTeams/myTeams'
import {TournamentsPage} from '../pages/Tournaments/tournaments'
import {TeamsPage} from '../pages/Teams/teams'
import {TeamHomePage} from '../pages/TeamHome/teamHome'
import { EliteApi } from './shared/elite-api.service'

@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = MyTeamsPage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome () {
    this.nav.push(MyTeamsPage)
  }

  goToTournaments () {
    this.nav.push(TournamentsPage)
  }
}
