import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { reducerInitialState, reducers } from "../shared/reducers";
import { EffectsModule } from '@ngrx/effects';
import { CommitsRequestService, CommitsService } from '../shared/commits/commits.service';
import { CommitsActions } from '../shared/commits/commits.actions';
import { CommitsEffects } from '../shared/commits/commits.effects';
import { DefaultComponent } from "./pages/default.component";

@NgModule({
  declarations: [
    AppComponent,DefaultComponent
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule, 
    EffectsModule.forRoot([
      CommitsEffects,
  
  ]),
    StoreModule.forRoot(reducers, {
      initialState: reducerInitialState
    })
  ],

  providers: [ CommitsRequestService,
    CommitsService,
    CommitsActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
