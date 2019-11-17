import {SET_USER_INFO} from '../constants'
import { _getUserInfo } from '../../api/client'

export const setUserInfo = (userInfo) => {
    return {
        type: SET_USER_INFO,
        payload: userInfo
    }
}

export const getUserInfo = () => {
    return async dispatch => {
        let data = await _getUserInfo()
        let res = data.data
        dispatch(setUserInfo(res))
    }
}