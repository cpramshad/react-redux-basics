import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = () => {
    return {
        type: actionTypes.ADD,
        value: 5
    };
};

export const substract = () => {
    return {
        type: actionTypes.SUBTRACT,
        value: 5
    };
};