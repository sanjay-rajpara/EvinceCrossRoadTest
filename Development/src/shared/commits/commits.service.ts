import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../app.store';
import { CommitsActions } from './commits.actions';
import { Observable } from 'rxjs';
import { CommitsState } from './commits.model';
import { HttpClient } from '@angular/common/http';
import { CommitsItemModel } from './commits.model';
import { timeout } from 'rxjs/operators';

@Injectable()
export class CommitsService {
    private _commits: Observable<CommitsState>;
    constructor(private store: Store<AppStore>,
        private commitsActions: CommitsActions) {
        this._commits = this.store.select('commits');
    }
    public get(): Observable<CommitsState> {
        return this._commits;
    }
    public fetch(data) {

        this.commitsActions.get(data);
    }
    public reset() {
        this.commitsActions.reset();
    }



}

@Injectable()
export class CommitsRequestService {

    constructor(private http: HttpClient) {
    }
    public get(payload) {
        return this.http.get('https://api.github.com/repos/' + payload.name + '/' + payload.repoName +'/commits'
        );

    }


}
