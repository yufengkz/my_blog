import * as constants from '../constants'

// 初始化state
let initState = {
    title: '首页',
}

// 初始化reducer
const reducer =  (state = initState, action) => {
    switch (action.type){
        case constants.SET_MENU_TITLE:
            document.title = action.title
            return {...state, title: action.title}
        default:
            return state
    }
}
export default  reducer