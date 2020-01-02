import { CommitsState } from './commits/commits.model';
 
/**
 * List of variables in the redux store
 */

export interface AppStore {
    readonly commits: CommitsState;
  
}
