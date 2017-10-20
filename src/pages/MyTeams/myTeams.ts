import { Component } from '@angular/core'
import { LoadingController, NavController } from 'ionic-angular'

import { TournamentsPage } from '../Tournaments/tournaments'
import { TeamHomePage } from '../TeamHome/teamHome'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-myteams',
  templateUrl: 'myTeams.html'
})

export class MyTeamsPage {  
  favorites = [
    {
      team: {
        id: 1,
        name: 'Team 1',
        coach: 'Felipe',
        tournamentId: '1',
        tournamentName: 'T1'
      }
    }
  ]

  constructor (
    private nav: NavController,
    private loadingController: LoadingController,
    private eliteApi: EliteApi
  ) {}

  goToTournaments () {
    this.nav.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    })

    loader.present()
    this.eliteApi.getTournamentData(favorite.tournamentId)
    .subscribe(t => this.nav.push(TeamHomePage, favorite.team))
  }
}
