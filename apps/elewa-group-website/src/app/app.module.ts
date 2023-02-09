import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

import { HomePageModule } from '@elewa-group/pages/elewa/home';

import { CardsModule } from '@elewa-group/features/components/cards';
import { SocialImpactModule } from '@elewa-group/pages/elewa/social-impact';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    ScullyLibModule,
    HomePageModule,
    CardsModule,
    SocialImpactModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
