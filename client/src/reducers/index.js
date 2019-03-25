import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import prova2Reducer from './prova2Reducer'

export default combineReducers({
    item: itemReducer,
    prova2: prova2Reducer
});

