
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import NProgress from 'nprogress'

import App from '../App'

import Login from '../views/login'

//Client
import ClientLayout from '../views/client/home-layout'
import ClientHome from '../views/client/home'
import ClientArticle from '../views/client/article/article'
import ClientArticleDetail from '../views/client/article/detail'

//Admin
import AdminLayout from '../views/admin/admin-layout'
import AdminHome from '../views/admin/home'
import ArticleList from '../views/admin/article/list'
import ArticleDetail from '../views/admin/article/detail'
import About from '../views/client/about/About';

class Routers extends Component {
	componentWillMount() {
		//进度环显示隐藏
		// NProgress.configure({showSpinner: false});
		NProgress.start()
	}
	componentDidMount() {
		setTimeout(() => {
			NProgress.done()
		}, 1000)
	}
	render() {
		return (
			<App>
				<Router>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/admin" render={() => (
							<AdminLayout>
								<Switch>
									<Route path="/admin/home" component={AdminHome} />
									<Route path="/admin/article/list" component={ArticleList} />
									<Route path="/admin/article/detail" component={ArticleDetail} />
									<Redirect to="/admin/home" />
								</Switch>
							</AdminLayout>
						)} />
						<Route path="/" render={() => (
							<ClientLayout>
								<Switch>
									<Route path="/home" component={ClientHome} />
									<Route path="/article" component={ClientArticle} />
									<Route path="/detail/:id" component={ClientArticleDetail} />
									<Route path="/about" component={About} />
									<Redirect to="/home" />
								</Switch>
							</ClientLayout>
						)} />
					</Switch>
				</Router>
			</App>
		)
	}
}

export default Routers