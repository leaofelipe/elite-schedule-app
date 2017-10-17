import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import { TournamentsPage } from '../Tournaments/tournaments'

@Component ({
  selector: 'page-myteams',
  templateUrl: 'myTeams.html'
})

export class MyTeamsPage {
  constructor (private nav: NavController) {}

  goToTournaments () {
    this.nav.push(TournamentsPage);
  }
}
