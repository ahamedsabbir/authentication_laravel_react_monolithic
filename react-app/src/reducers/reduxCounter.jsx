//const
const NUM = { count: parseInt(localStorage.getItem('count')) || 4 }
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const STATIC = 'static'
const RESET = 'reset'

//action
const numIncrement = () => {
    return {
        type: INCREMENT
    }
}
const numDecrement = () => {
    return {
        type: DECREMENT
    }
}
const numStatic = (number) => {
    return {
        type: STATIC,
        payload: number
    }
}
const numReset = () => {
    return {
        type: RESET
    }
}

//reducer
const numReducer = (state = NUM, action) => {
    let newState;
    switch (action.type) {
        case INCREMENT:
            newState = {
                ...state,
                count: state.count + 1
            }
            break;
        case DECREMENT:
            newState = {
                ...state,
                count: state.count - 1
            }
            break;
        case STATIC:
            newState = {
                ...state,
                count: Number(action.payload)
            }
            break;
        case RESET:
            newState = {
                ...state,
                count: 0
            }
            break;
        default:
            return state;
    }
    localStorage.setItem('count', newState.count.toString());
    return newState;
}

export { numReducer, numIncrement, numDecrement, numStatic, numReset };