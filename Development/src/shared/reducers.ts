import { ActionReducerMap } from '@ngrx/store';

import { commitsInitialState, CommitsState } from './commits/commits.model';
import { commitsReducer } from './commits/commits.reducer';

export interface State {
  commits: CommitsState; 
 
}

export const reducers: ActionReducerMap<State> = {
  commits: commitsReducer,
 
};

export const reducerInitialState: State = {
  commits: commitsInitialState,
  
};
