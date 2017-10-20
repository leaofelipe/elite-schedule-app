import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import { MyTeamsPage } from '../MyTeams/myTeams'
import { GamePage } from '../Game/game'
import * as _ from 'lodash'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-teamdetail',
  templateUrl: 'teamDetail.html'
})

export class TeamDetailPage {
  games: any[];
  team: any;
  private tourneyData: any;

  constructor (private nav: NavController, private navParams: NavParams, private eliteApi: EliteApi, ) {
  }

  /* goHome () { */
  /*   /1* this.nav.push(MyTeamsPage) *1/ */ 
  /*   /1* this.nav.popToRoot() *1/ */
   
  /*   this.nav.parent.parent.popToRoot() */
  /* } */

  ionViewDidLoad () {
    this.team = this.navParams.data
    this.tourneyData = this.eliteApi.getCurrentTourney()

    this.games = _.chain(this.tourneyData.games)
      .filter(g => g.team1Id === this.team.id || g.team2id === this.team.id)
      .map(g => {
        let isTeam1 = (g.team1Id === this.team.id)
        let opponentName = isTeam1 ? g.team2 : g.team1
        let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score)

        return {
          gameId: g.id,
          opponent: opponentName,
          time: Date.parse(g.time),
          location: g.location,
          locationUrl: g.locationUrl,
          scoreDisplay: scoreDisplay,
          homeAway: (isTeam1 ? 'vs.' : 'at')
        }
      })
      .value()
      console.log(this.games)
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      let teamScore = (isTeam1 ? team1Score: team2Score)
      let opponentScore = (isTeam1 ? team2Score : team1Score)
      let winIndicator = teamScore > opponentScore ? 'W: ' : 'L: '
      return winIndicator + teamScore + '-' + opponentScore
    } else {
      return ''
    }
  }

  gameClicked($event, game) {
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId)
    this.nav.parent.parent.push(GamePage, sourceGame)
  }

  dateChanged() {
    console.log('Changed.')
  }
}
