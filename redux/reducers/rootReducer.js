import counterReducer from './counterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    productList: counterReducer
});

export default rootReducer;