import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../app.store';
import { CommitsActions } from './commits.actions';
import { Observable } from 'rxjs';
import { CommitsState } from './commits.model';
import { HttpClient } from '@angular/common/http';


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
    public fetchBrancheSha(data) {

        this.commitsActions.getBranchSha(data);
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
        return this.http.get('https://api.github.com/repos/' + payload.name + '/' + payload.repoName +'/commits/'+payload.commitSha
        );

    }

    public getBranchSha(payload) {
        
        return this.http.get('https://api.github.com/repos/' + payload.name + '/' + payload.repoName +'/branches/'+ payload.branchName
        );

    }

// f8e9fceac2e89ac5c90ba298a2c8aab7a223dc91
}