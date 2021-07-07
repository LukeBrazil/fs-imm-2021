import * as actionType from '../actions/actionTypes'

export const onAdd = (payload) => {
    return {
        type: actionType.add,
        payload: payload
    }
}

export const onPlus = () => {
    return {
        type: actionType.plus
    }
}

export const onMinus = () => {
    return {
        type: actionType.minus
    }
}