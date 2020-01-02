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
  public _branchEvent;
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


  public ngOnInit() {

    this._routeParamsEvent = this.activatedRoute.queryParams.subscribe((params) => {
      if (params.from) {
        this._urlFrom = params.from;
      }
    });
    this.branchList();
    this._commitsEvent = this.commitsService.get().subscribe((commits: CommitsState) => {
      if (commits._action == CommitsActions.GET_SHA_FAIL) {
        this.error = commits._error;
      }
      else if (commits._action == CommitsActions.GET_SHA_SUCCESS) {
        this.branchData=commits.branchData;
        
       if(commits && commits.branchData)
       {
         //let sha=commits.branchData.commit['sha'];
        this.commitsService.reset();
        this.commitsList();
       }
      }
      else if (commits._action == CommitsActions.GET_FAIL) {
        this.error = commits._error;
      }
      else if (commits._action == CommitsActions.GET_SUCCESS) {
        this.dataFound=true;
        
        this.commitList=commits.data;
        
        console.log("this.commitList=>",this.commitList)
      }
    }); 
    // this._branchEvent = this.commitsService.get().subscribe((commits: CommitsState) => {
     
    // }); 

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
      repoName:this.repoName,
     // commitSha:sha
    }
     this.commitsService.fetch(sendPayload);
  }
  public branchList() {
    
    let sendPayload={
      name:this.repoUserName,
      repoName:this.repoName,
      branchName:this.branchName
    }
     this.commitsService.fetchBrancheSha(sendPayload);

    
  }
 
}
