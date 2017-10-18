import { Component } from '@angular/core'
import { LoadingController, NavController } from 'ionic-angular'

import { MyTeamsPage } from  '../MyTeams/myTeams'
import { TeamsPage } from  '../Teams/teams'
import { EliteApi } from '../../app/shared/elite-api.service'

@Component ({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})

export class TournamentsPage {
  tournaments: any;

  constructor (private nav: NavController, private eliteApi: EliteApi, private loadingController: LoadingController) {}

  itemTapped ($event, tourney) {
    this.nav.push(TeamsPage, tourney)
  }

  ionViewDidLoad () {
    let loader = this.loadingController.create({
      content: 'Getting tournaments'
    })
    
    loader.present().then(() => {
      this.eliteApi.getTournaments()
      .then(data => this.tournaments = data)
      loader.dismiss()
    })
  }
}
