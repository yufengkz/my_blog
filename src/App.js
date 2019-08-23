
import React, {Component} from 'react'
import NProgress from 'nprogress'
import {connect} from 'react-redux'
import Counter from './views/Counter'

class App extends Component {
	componentWillMount () {
		//进度环显示隐藏
		// NProgress.configure({showSpinner: false});
		NProgress.start()
	  }
	componentDidMount () {
		setTimeout(() => {
			NProgress.done()
		}, 1000)
	}
	render(){
		console.log(NProgress)
		return ( 
			<div className = "App" >
				<p>
					App当前环境：{process.env.REACT_APP_ENV} <br />
					App Tite: {process.env.REACT_APP_NAME} <br />
					App Version：{process.env.REACT_APP_VERSION} <br />
					App Domian：{process.env.REACT_APP_DOMAIN} <br />
					App Api: {process.env.REACT_APP_API} <br />
				</p>
				<hr/>
				<Counter></Counter>
				<hr/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(App)