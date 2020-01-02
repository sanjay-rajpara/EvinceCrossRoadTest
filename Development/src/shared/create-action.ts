import { ActionPayload } from './action';

/**
 * Create an action on the store and log it in the console
 */

export function createAction(type, payload = null): ActionPayload {
    
    return { type, payload };
}
