import { ActionPayload } from '../action';
import { CommitsActions } from './commits.actions';
import { commitsInitialState } from './commits.model';

export function commitsReducer(state: any, action: ActionPayload) {
    switch (action.type) {
        case CommitsActions.GET:
            return Object.assign({}, state, {
                _loading: true,
                _error: false,
                _action: CommitsActions.GET,
            });
        case CommitsActions.GET_SUCCESS:
            return Object.assign({}, state, {
                _loading: false,
                _error: false,
                _action: CommitsActions.GET_SUCCESS,
                data: action.payload,
                subgroups: action.payload.subgroups
            });
        case CommitsActions.GET_FAIL:
            return Object.assign({}, state, {
                _error: action.payload,
                _action: CommitsActions.GET_FAIL,
            });
 
        case CommitsActions.RESET:
            return Object.assign({}, state, commitsInitialState);
        default:
            return state;
    }
}
