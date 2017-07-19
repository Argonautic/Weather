import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // never mutate state. The ... will add all contents of state
            // into a new array containing action.payload.data in front
            return [ action.payload.data, ...state];
    }
    return state;
}
