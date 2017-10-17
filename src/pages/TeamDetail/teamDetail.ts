import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component ({
  selector: 'page-teamdetail',
  templateUrl: 'teamDetail.html'
})

export class TeamDetailPage {
  team: any;

  constructor (private nav: NavController, private navParams: NavParams) {
    this.team = this.navParams.data
    console.log(this.navParams)
  }
}
