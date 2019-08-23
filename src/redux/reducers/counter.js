import * as constants from '../constants'

// 初始化state
let initState = {
    count: 0,
}

// 初始化reducer
const reducer =  (state = initState, action) => {
    switch (action.type){
        case constants.INCREMENT:
            return {...state, count: state.count + 1}
        case constants.DECREMENT:
            return{...state, count: state.count - 1}
        case constants.RESET:
            return{ ...state, count: 0}
        default:
            return state
    }
}
export default  reducer