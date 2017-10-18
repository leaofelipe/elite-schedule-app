import { Component } from '@angular/core'
import {NavController, NavParams} from 'ionic-angular'

import {StandingsPage} from '../Standings/standings'
import {TeamDetailPage} from '../TeamDetail/teamDetail'
import {MyTeamsPage} from '../MyTeams/myTeams'

@Component ({
  selector: 'page-teamhome',
  templateUrl: 'teamHome.html'
})

export class TeamHomePage {
  team: any;
  teamDetailTab = TeamDetailPage
  standingsTab = StandingsPage

  constructor (private nav: NavController, private navParams: NavParams) {
    this.team = this.navParams.data
  }

  goHome () {
    /* this.nav.push(MyTeamsPage) */
    this.nav.popToRoot()
  }
}
