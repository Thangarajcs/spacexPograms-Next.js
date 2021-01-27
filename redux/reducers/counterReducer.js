import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/conterActions';

const counterReducer = (state = '', action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...action.payload};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;