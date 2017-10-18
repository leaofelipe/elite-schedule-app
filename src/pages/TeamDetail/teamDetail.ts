import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import { MyTeamsPage } from '../MyTeams/myTeams'

@Component ({
  selector: 'page-teamdetail',
  templateUrl: 'teamDetail.html'
})

export class TeamDetailPage {
  team: any;

  constructor (private nav: NavController, private navParams: NavParams) {
    this.team = this.navParams.data
  }

  /* goHome () { */
  /*   /1* this.nav.push(MyTeamsPage) *1/ */ 
  /*   /1* this.nav.popToRoot() *1/ */
   
  /*   this.nav.parent.parent.popToRoot() */
  /* } */
}
