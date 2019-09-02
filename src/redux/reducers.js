import {combineReducers} from 'redux'
//一个项目有很多reducer，整合reducer
import counter from './reducers/counter'
import setMenuTitle from './reducers/menu'

export default combineReducers({
    counter,
    setMenuTitle
})