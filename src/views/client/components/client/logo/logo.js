import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Layout, Row, Col, Menu } from 'antd'
const { Header } = Layout
const Logo = props => {
    //const [current, setCurrent] = useState('home')

    let path = props.location.pathname
    // if(path.indexOf('detail')) path = 'article'
    return (
        <Header style={{ padding: 0 }}>
            <Row type="flex" justify="center">
                <Col lg={20} md={20} sm={20} xs={20} className="client-header">
                    <h1 className="client-logo">
                        {/* <img src="https://raw.githubusercontent.com/yufengkz/Blog/master/app/images/favicon.ico" alt="logo"/> */}
                        YuFeng <span>个人站</span>
                    </h1>
                    <Menu selectedKeys={[path]} mode="horizontal" className="client-menu">
                        <Menu.Item key="/home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/article">
                            <Link to="/article">文章</Link>
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Link to="/about">关于我</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}

export default withRouter(Logo)

