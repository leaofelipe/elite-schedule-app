import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { TeamHomePage } from '../TeamHome/teamHome'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-game',
  templateUrl: 'game.html'
})

export class GamePage {
  game: any = {}

  constructor (
    private nav: NavController,
    private navParams: NavParams,
    private eliteApi: EliteApi
  ) {}

  ionViewDidLoad () {
    this.game = this.navParams.data
  }

  teamTapped (teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney()
    let team = tourneyData.teams.find(t => t.id === teamId)
    this.nav.push(TeamHomePage, team)
  }
}
