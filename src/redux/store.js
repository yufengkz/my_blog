import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

let store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunkMiddleware)))
// let store = createStore(combineReducers(reducers), applyMiddleware(thunkMiddleware))

export default store