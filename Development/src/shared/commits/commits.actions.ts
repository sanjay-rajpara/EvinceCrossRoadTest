import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import { createAction } from '../create-action';


@Injectable( )
export class CommitsActions {

  static GET = 'COMMITS_GET';
  static GET_SUCCESS = 'COMMITS_GET_SUCCESS';
  static GET_FAIL = 'COMMITS_GET_FAIL';
  
  static RESET = 'COMMITS_RESET';
  constructor(
    private store: Store<AppStore>
  ) { }

  public get(payload) {
    this.store.dispatch(createAction(CommitsActions.GET, payload));
  }
  public reset() {
    this.store.dispatch(createAction(CommitsActions.RESET));
  }
   
}
