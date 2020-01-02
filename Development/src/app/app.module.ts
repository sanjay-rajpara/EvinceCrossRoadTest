import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { reducerInitialState, reducers } from "../shared/reducers";

import { DefaultComponent } from "./pages/default.component";
import { CommitsService } from '../shared/commits/commits.service';
import { CommitsActions } from '../shared/commits/commits.actions';
 
@NgModule({
  declarations: [
    AppComponent,DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule, 
    
    StoreModule.forRoot(reducers, {
      initialState: reducerInitialState
    })
  ],

  providers: [CommitsService,CommitsActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
