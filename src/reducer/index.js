import { combineReducers } from 'redux';
import AppConstant from '../constant';

const weatherReducer = (state = [], action) => {
    if(action.type === AppConstant.FETCH_WEATHER) {
        return [action.payload.data, ...state];
    }
    return state;
}
export default combineReducers({
    weather: weatherReducer
});