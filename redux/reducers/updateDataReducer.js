import { UPDATE_PRODUCT_LIST } from '../actions/updateProductListAction';

const dataUpdateReducer = (state = '', action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_LIST:
            return {...action.payload};
        default:
            return {...state};
    }
};

export default dataUpdateReducer;