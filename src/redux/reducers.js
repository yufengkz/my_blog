import {
    SET_USER_INFO
} from './constants'

export default {
    userInfo(state = null, action) {
        const { type, payload } = action
        switch (type) {
            case SET_USER_INFO:
                return payload
            default:
                return state
        }
    }
}