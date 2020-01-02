import { Component,  OnInit, Renderer2, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CommitsService } from '../../shared/commits/commits.service';
import { CommitsState, BranchObject, RootObject } from '../../shared/commits/commits.model';
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
  public branchName = 'develop';
  public _urlFrom = '';
  public _commitsEvent; 
  public _routeParamsEvent;
  public error: string = '';
  public commitList:RootObject;
  public branchData:BranchObject;
  public dataFound:boolean =false;
  public constructor(public renderer: Renderer2,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public commitsService: CommitsService ) {

  }

/**
 * ngOnInit event 
 */
  public ngOnInit() {

    this._routeParamsEvent = this.activatedRoute.queryParams.subscribe((params) => {
      if (params.from) {
        this._urlFrom = params.from;
      }
    });
    this.commitsList();
    this._commitsEvent = this.commitsService.get().subscribe((commits: CommitsState) => {
     if (commits._action == CommitsActions.GET_FAIL) {
        this.error = commits._error;
      }
      else if (commits._action == CommitsActions.GET_SUCCESS) {
        this.dataFound=true;
        this.commitList=commits.data;
       
      }
    }); 

  }

  /**
   * Remove background and unsubscribe store variables.
   */
  public ngOnDestroy() {
     this._commitsEvent.unsubscribe();
    this._routeParamsEvent.unsubscribe();
  }

  /**
   * commitsList method to call Service
   **/
  public commitsList() {
    
    let sendPayload={
      name:this.repoUserName,
      repoName:this.repoName,
     
    }
     this.commitsService.fetch(sendPayload);
  }
 
}
