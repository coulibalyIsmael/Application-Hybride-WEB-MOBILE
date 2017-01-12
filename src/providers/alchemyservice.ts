import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Test} from  './test';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Alchemyservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  providers: [Test]
})
@Injectable()
export class Alchemyservice {
      news: any;
      next:string;
      etat: string;
      total: string;
      data: any;
      headers: Headers;
      error: any;
      erreur: any;
  constructor(public http: Http, public test: Test, public navParams: NavParams) {
    console.log('Hello Alchemyservice Provider');
      this.headers = new Headers();
      this.headers.append('Access-Control-Allow-Origin', '*');
      this.headers.append('Access-Control-Allow-Credentials', 'true')
      this.headers.append('Access-Control-Allow-Methods', 'GET, POST')
    //  this.headers.append('Access-Control-Allow-Credentials', 'true')



  }
  load() {
    if (this.data && !this.next ) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.

      this.http.post('http://localhost:3000/search',{data:Test.getElement()}, this.headers)
        .map(res => {
          if(res.status < 200 || res.status >= 300) {
        throw new Error('This request has failed ' + res.status);
        }
      // If everything went fine, return the response
      else {
        return res.json();
        }
}
    )
        .subscribe( (data) => {
          console.log('data --->', data);

          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          if(data.result !== undefined )
          {this.news = data.result.docs;
          this.next = data.result.next;
          this.total = data.totalTransactions;
          this.etat = data.result.status;
          this.data = {
            news: this.news,
            next: this.next,
            etat: this.etat,
            total: this.total
          };
          console.log("data---->",this.data);
          resolve(this.data);
        }
          else{
            console.log("erreur");
            this.erreur = {
              total: data.totalTransactions,
              etat: data.statusInfo,
              code: data.code,
              status: data.usage
            }
              resolve(this.erreur);
          }
        },
        (err)=>{this.error = err;
          console.log('data---->', err);
          resolve(this.error);}
      );
    });
  }
}
