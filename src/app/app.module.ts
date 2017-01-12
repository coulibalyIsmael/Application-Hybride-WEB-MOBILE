import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AlchemyhomePage} from '../pages/alchemyhome/alchemyhome';
import { FormsModule }   from '@angular/forms';
import {AlchemyListsPage} from '../pages/alchemy-lists/alchemy-lists';
import {Alchemyservice} from '../providers/alchemyservice';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlchemyhomePage,
    AlchemyListsPage,
  //Alchemyservice
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlchemyhomePage,
    AlchemyListsPage,

  ],
  providers: [  Alchemyservice,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
