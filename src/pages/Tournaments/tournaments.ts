import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import { MyTeamsPage } from  '../MyTeams/myTeams'
import { TeamsPage } from  '../Teams/teams'

@Component ({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})

export class TournamentsPage {
  constructor (private nav: NavController) {}

  itemTapped () {
    this.nav.push(TeamsPage)
  }
}
