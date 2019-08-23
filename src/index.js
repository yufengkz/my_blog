import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'

import store from './redux/store'
import axios from './lib/axios'
import * as serviceWorker from './serviceWorker'

//样式

// 绑定 全局方法 axios
React.Component.prototype.axios = axios

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.unregister()
