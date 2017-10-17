import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import {TeamDetailPage} from '../TeamDetail/teamDetail'

@Component ({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})

export class TeamsPage {
  constructor (private nav: NavController) {}

  itemTapped () {
    this.nav.push(TeamDetailPage)
  }
}
