import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Routers from './router'

import store from './redux/store'
import axios from './lib/axios'
import * as serviceWorker from './serviceWorker'

//样式

// 绑定 全局方法 axios
React.Component.prototype.axios = axios

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>, 
    document.getElementById('root')
)

serviceWorker.unregister()
