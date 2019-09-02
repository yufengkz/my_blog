import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import combineReducers from './reducers'

let store = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store