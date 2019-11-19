import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { Layout, Row, Col, Menu } from 'antd'
const { Header } = Layout
const Logo = props => {

    let pathname = props.location.pathname
    if (pathname.indexOf('detail') != -1) pathname = '/article'
    const [current, setCurrent] = useState(pathname)

    const handleClick = ({ key }) => {
        let pathname = props.location.pathname
        if (key === pathname) return
        if (pathname.indexOf('detail') != -1) key = '/article'
        setCurrent(key)
        props.history.push(key)
    }

    return (
        <Header style={{ padding: 0 }}>
            <Row type="flex" justify="center">
                <Col lg={20} md={20} sm={20} xs={20} className="client-header">
                    <h1 className="client-logo">
                        {/* <img src="https://raw.githubusercontent.com/yufengkz/Blog/master/app/images/favicon.ico" alt="logo"/> */}
                        YuFeng <span>个人站</span>
                    </h1>
                    <Menu onSelect={handleClick} selectedKeys={[current]} mode="horizontal" className="client-menu">
                        <Menu.Item key="/home">
                            首页
                            {/* <Link to="/home">首页</Link> */}
                        </Menu.Item>
                        <Menu.Item key="/article">
                            文章
                            {/* <Link to="/article">文章</Link> */}
                        </Menu.Item>
                        <Menu.Item key="/about">
                            关于我
                            {/* <Link to="/about"></Link> */}
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </Header>
    )
}

export default withRouter(Logo)

