import * as actionTypes from './actions/actionTypes'

const initialState = {
    count: 10
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.add: {
           return  {
               ...state,
               count: state.count + action.payload
           }
        }
        case actionTypes.plus: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case actionTypes.minus: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        
            

    }
    return state
}

export default reducer