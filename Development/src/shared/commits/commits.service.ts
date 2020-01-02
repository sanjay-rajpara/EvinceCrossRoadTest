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
    /**
     * get method to call API
     * @param payload 
     */
    public get(payload) {
        return this.http.get('https://api.github.com/repos/' + payload.name + '/'
            + payload.repoName + '/commits'
        );

    }

    public getBranchSha(payload) {

        return this.http.get('https://api.github.com/repos/' + payload.name + '/' + payload.repoName + '/branches/' + payload.branchName
        );

    }
    /**
     * convertDateFormate method to convert date JSON to string
     * @param data 
     */
    public convertDateFormate(data) {
        data.forEach(element => {
             if (element['commit']['author']['date']) {
                var json = element['commit']['author']['date'];
             var date = new Date(json);
                element['commit']['author']['date']=this.getMyFormatDate(date);
            }

        });
        return data;

    }
    /**
     * getMyFormatDate method to convert date string formate
     * @param date 
     */
    private getMyFormatDate(date) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = date;
        var hours = d.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        return months[d.getMonth()] + ' ' + d.getDate() + " " + d.getFullYear() + ' ' + hours + ':' + d.getMinutes() + ' ' + ampm;
    }

}
