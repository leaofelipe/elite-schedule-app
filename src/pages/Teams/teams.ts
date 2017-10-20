import { Component } from '@angular/core'
import { LoadingController, NavController, NavParams } from 'ionic-angular'
import * as _ from 'lodash'

import {TeamHomePage} from '../TeamHome/teamHome'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})

export class TeamsPage {
  private allTeams : any;
  private allTeamDivisions: any;
  teams = []
  constructor (
    private nav: NavController,
    private navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController
  ) {}

  itemTapped ($event, team) {
    this.nav.push(TeamHomePage, team)
  }

  ionViewDidLoad () {
    let selectedTourney = this.navParams.data;
    let loader = this.loadingController.create({
      content: 'Getting data...'
    })
    loader.present()
    .then(() => {
      let selectedTourney = this.navParams.data
      this.eliteApi.getTournamentData(selectedTourney.id)
      .subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = _
        .chain(data.teams)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(
          ['divisionName', 'divisionTeams'], item
        ))
        .value()
        this.teams = this.allTeamDivisions;
        loader.dismiss()
      })
    })
  }
}
