import { combineReducers } from 'redux';
import planetReducer from "./planetReducer";
import { descReducer }  from './planetReducer'

const reducers = combineReducers({
    planet: planetReducer,
    desc: descReducer
});
export default reducers;