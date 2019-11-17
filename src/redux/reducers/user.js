import { SET_USER_INFO, GET_USER_INFO } from '../constants'

// 初始化state
// let initState = {

// }

// 初始化reducer
export const setUseReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER_INFO:
            return payload
        default:
            return state
    }
}
export const getUseReducer = (state = null, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_USER_INFO:
            return payload
        default:
            return state
    }
}

