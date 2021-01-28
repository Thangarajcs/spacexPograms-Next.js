import dataUpdateReducer from './updateDataReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    productList: dataUpdateReducer
});

export default rootReducer;