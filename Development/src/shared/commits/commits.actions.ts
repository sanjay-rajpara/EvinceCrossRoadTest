import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
import { createAction } from '../create-action';


@Injectable( )
export class CommitsActions {

  static GET = 'COMMITS_GET';
  static GET_SUCCESS = 'COMMITS_GET_SUCCESS';
  static GET_FAIL = 'COMMITS_GET_FAIL';
  
  static GET_SHA = 'BRANCH_GET_SHA';
  static GET_SHA_SUCCESS = 'BRANCH_GET_SHA_SUCCESS';
  static GET_SHA_FAIL = 'BRANCH_GET_SHA_FAIL';
  static RESET = 'COMMITS_RESET';
  constructor(
    private store: Store<AppStore>
  ) { }
/**
 * get Method to load dispatch 
 * @param payload 
 */
  public get(payload) {
    this.store.dispatch(createAction(CommitsActions.GET, payload));
  }
  public getBranchSha(payload) {
    this.store.dispatch(createAction(CommitsActions.GET_SHA, payload));
  }
  public reset() {
    this.store.dispatch(createAction(CommitsActions.RESET));
  }
   
}
