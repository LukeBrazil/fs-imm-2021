const initialState = {
    count: 10
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD': {
           return  {
               ...state,
               count: state.count + action.payload
           }
        }
        case 'PLUS': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'MINUS': {
            return {
                ...state,
                count: state.count - 1
            }
        }
            

    }
    return state
}

export default reducer