import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';

import {AlchemyListsPage} from '../alchemy-lists/alchemy-lists';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Test} from '../../providers/test';
import {Alchemyservice} from '../../providers/alchemyservice';


/*
  Generated class for the Alchemyhome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alchemyhome',
  templateUrl: 'alchemyhome.html',
  providers: [Alchemyservice,Test],

})
export class AlchemyhomePage {
  categorie: string;
  champSearch: string;
  startDate: string;
  endDate: string;
  filters : string[];
  url: boolean;
  title: boolean;
  author:boolean;
  fullText: boolean;
  motCle: boolean;
  info : any;







  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public test: Test ) {

  }
  /*form = new FormGroup({
    motCle: new FormControl(this.motCle, Validators.required),
    startDate: new FormControl(this.startDate,Validators.required)
  });*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlchemyhomePage');

  }
  //  cand = categorie;
  newsAlert = function() {
    // console.log(cand);
    let alert = this.alertCtrl.create();
    alert.setTitle('Choisir les news de manière spécifique');
    alert.addInput({
      type: 'radio',
      label: 'International',
      value: 'International',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'local news',
      value: 'local',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'national news',
      value: 'national',
      checked: false
    });
    alert.addButton({
      text: 'ok',
      handler: data =>{
        this.filters = data;
      }
    });
    console.log("alert déclenché");

    if (this.categorie === 'news') {
      alert.present();
    }
  };

  lancer(){
    console.log(this.champSearch);

    const form = new FormGroup({
      motCle: new FormControl(this.champSearch, Validators.required),
      startDate: new FormControl(this.startDate,Validators.pattern('^[0-10]{1,3}'))
    });
    console.log(form.status);
    if(form.status === "VALID"){

  this.info = {
      categorie: this.categorie,
      champSearch: this.champSearch,
      startDate: this.startDate,
      endDate: 'now',
      url: this.url,
      title: this.title,
      author:this.author,
      fullText: this.fullText,
      motCle: this.motCle
    };
    Test.setElement(this.info);
    console.log(form.status);
    this.navCtrl.push(AlchemyListsPage,{});
  }

}


}
