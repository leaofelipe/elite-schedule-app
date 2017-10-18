import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import {TeamHomePage} from '../TeamHome/teamHome'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})

export class TeamsPage {
  teams = []
  constructor (private nav: NavController, private navParams: NavParams, private eliteApi: EliteApi) {}

  itemTapped ($event, team) {
    this.nav.push(TeamHomePage, team)
  }

  ionViewDidLoad () {
    let selectedTourney = this.navParams.data
    this.eliteApi.getTournamentData(selectedTourney.id)
    .subscribe(data => {
      this.teams = data.teams
    })
  }
}
