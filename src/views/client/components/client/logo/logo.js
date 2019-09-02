import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { Layout, Card, Row, Col, Icon, Menu } from 'antd'
const { Header, Sider, Content } = Layout
const Logo = () => {
    const [current, setCurrent] = useState('home')


    return (
        <Header style={{ padding: 0 }}>
            <Row type="flex" justify="center">
                <Col lg={20} md={20} sm={20} xs={20} className="client-header">
                    <h1 className="client-logo">
                        {/* <img src="https://raw.githubusercontent.com/yufengkz/Blog/master/app/images/favicon.ico" alt="logo"/> */}
                        YuFeng <span>个人站</span>
                    </h1>
                    <ul className="client-menu">
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/article">文章</Link></li>
                        <li><Link to="/about">关于我</Link></li>
                    </ul>
                </Col>
            </Row>
        </Header>
    )
}

export default Logo

