import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Alchemyservice} from '../../providers/alchemyservice';
import {InAppBrowser } from 'ionic-native';
import {Platform} from 'ionic-angular';
import {Test} from '../../providers/test'


/*
  Generated class for the AlchemyLists page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alchemy-lists',
  templateUrl: 'alchemy-lists.html',
  providers: [Alchemyservice, Test]
})
export class AlchemyListsPage {
  public news : any;
  public etat: string;
  public next: string;
  public total: string;
  private aide: any;
 browser : InAppBrowser;
 etatE: string;
 code: string;
 tot: string;
 status: string;
 erreur: boolean;
  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, public alchemyService : Alchemyservice, public test:Test) {
  console.log(navParams);
console.log("list",Test.getElement());

this.afficherLists();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlchemyListsPage');
  }
  afficherLists(){
    this.alchemyService.load().
    then(data =>{
      if(data.news !== undefined )
    { this.erreur = true;
      this.news = data.news;
      this.total = data.total;
      this.next = data.next;
      }
      else{
      this.erreur = false;
      console.log(data.etat);
      console.log(data.status);

        this.etatE = data.etat,
        this.status = data.status,
        this.tot = data.total,
        this.code = data.code

      }
    })

  };
  afficherPage(url){
    console.log("lien");
    this.platform.ready().then(() => {
          let options ='location=no,toolbar=yes,hidden=no';
          this.browser = new  InAppBrowser(url, "_blank", options);
       });

  };

  suivant(){

  }
}
