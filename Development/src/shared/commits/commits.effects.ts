import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommitsActions } from './commits.actions';
import { createAction } from '../create-action';
import { ActionPayload } from '../action';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs';
import { CommitsRequestService } from './commits.service';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, mergeMap, concatMap } from 'rxjs/operators';


@Injectable()
export class CommitsEffects {

    constructor(
        private actions$: Actions,
        private commitsRequestService: CommitsRequestService
    ) {

    }

    @Effect() get$ = this.actions$.pipe(
        ofType(CommitsActions.GET)
        , mergeMap((data: ActionPayload) => {
        
            return this.commitsRequestService.get(data.payload)
                .map(res => {
                     return createAction(
                        CommitsActions.GET_SUCCESS,res
                    );
                }).catch((res: HttpErrorResponse) => {
                    console.log("error=>", res);
                     return Observable.of(createAction(CommitsActions.GET_FAIL, res));
                });
        }));

        @Effect() getBranchSha$ = this.actions$.pipe(
            ofType(CommitsActions.GET_SHA)
            , mergeMap((data: ActionPayload) => {
            
                return this.commitsRequestService.getBranchSha(data.payload)
                    .map(res => {
                        return createAction(
                            CommitsActions.GET_SHA_SUCCESS,res
                        );
                    }).catch((res: HttpErrorResponse) => {
                        console.log("error=>", res);
                         return Observable.of(createAction(CommitsActions.GET_SHA_FAIL, res));
                    });
            }));
    


}
