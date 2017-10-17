import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component ({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})

export class TournamentsPage {
  constructor (private nav: NavController) {}

  navigate () {
    this.nav.pop();
  }
}
