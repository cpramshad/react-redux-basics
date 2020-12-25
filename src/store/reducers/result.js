import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = { 
    results: []
}

// Reducer
const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date(), value: action.result})
            // };
            return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result}) });
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            // return {
            //     ...state,
            //     results: updatedArray
            // };
            return updateObject(state, { results: updatedArray});
        default:
            return state;            
    }
};

export default reducer;