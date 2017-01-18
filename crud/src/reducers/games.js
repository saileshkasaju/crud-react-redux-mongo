/**
 * Created by sailesh on 1/18/17.
 */
import { SET_GAMES } from '../actions';

export default function games(state = [], action = {}) {
    switch(action.type) {
        case SET_GAMES: return action.games;
        default: return state;
    }
}