import { Component } from '@angular/core'
import {NavController, NavParams} from 'ionic-angular'

import {StandingsPage} from '../Standings/standings'
import {TeamDetailPage} from '../TeamDetail/teamDetail'

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
}
