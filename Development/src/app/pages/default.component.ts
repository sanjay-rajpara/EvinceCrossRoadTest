import { Component,  OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CommitsService } from '../../shared/commits/commits.service';
import { CommitsState } from '../../shared/commits/commits.model';
import { CommitsActions } from '../../shared/commits/commits.actions';

/**
 * Default page.
 *
 */


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit,OnDestroy {


  public repoUserName = 'sanjay-rajpara';
  public repoName = 'EvinceCrossRoadTest';
  public _urlFrom = '';
  public _commitsEvent;
  public _routeParamsEvent;
  public error: string = '';
  public commitList:any;
  public constructor(public renderer: Renderer2,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public commitsService: CommitsService) {
  }


  public ngOnInit() {

    this._routeParamsEvent = this.activatedRoute.queryParams.subscribe((params) => {
      if (params.from) {
        this._urlFrom = params.from;
      }
    });

    this._commitsEvent = this.commitsService.get().subscribe((commits: CommitsState) => {

      if (commits._action == CommitsActions.GET_FAIL) {
        this.error = commits._error;
        this.commitsService.get()
      }
      else if (commits._action == CommitsActions.GET_SUCCESS) {
        this.commitList=commits.data;
      }
    }); 
   this.commitsList();
  }

  /**
   * Remove background and unsubscribe store variables.
   */
  public ngOnDestroy() {
     this._commitsEvent.unsubscribe();
    this._routeParamsEvent.unsubscribe();
  }

  /**
   * API call to commitsList
   */
  public commitsList() {
    
    let sendPayload={
      name:this.repoUserName,
      repoName:this.repoName
    }

    const commitsInfo = this.commitsService.fetch(sendPayload);

    
  }
 
}
