/**
 * Created by sailesh on 1/18/17.
 */
import { SET_GAMES, ADD_GAME } from '../actions';

export default function games(state = [], action = {}) {
    switch(action.type) {
        case SET_GAMES: return action.games;
        case ADD_GAME: return [...state, action.game];
        default: return state;
    }
}