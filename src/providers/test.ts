import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';

/*
  Generated class for the Test provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Test {
 private  static  aide: any;
  constructor(public http: Http) {
    console.log('Hello Test Provider');
    //console.log(this.aide);


  }

static setElement(aide){
  Test.aide = aide;
}
  static getElement( ){

    return Test.aide;
  }

}
