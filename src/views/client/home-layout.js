import React from 'react'
import { Layout, Card, Row, Col } from 'antd'

import Logo from './components/client/logo/logo'
import User from './components/content/user'

import './home.less'

const Client = props => {
    return (
        <div className="client-waper">
            <Layout>
                {/* Logo */}
                <Logo />
                <Layout style={{ marginTop: 20 }}>
                    <div className="client-main">
                        <Row gutter={24} type="flex" justify="center">
                            {/* 个人信息 */}
                            <User />
                            {/* 内容 */}
                            <Col lg={15} md={14} sm={22} xs={22}>
                                <Card bordered={false} >
                                    {props.children}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Layout>
            </Layout>
        </div>
    )
}

export default Client