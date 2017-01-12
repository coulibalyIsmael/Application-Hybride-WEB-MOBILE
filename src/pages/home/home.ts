import { Component } from '@angular/core';
import {AlchemyhomePage} from '../alchemyhome/alchemyhome'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;

  constructor(public navCtrl: NavController) {
      this.nav = navCtrl;
  }
  alchemyhome = AlchemyhomePage;

}
