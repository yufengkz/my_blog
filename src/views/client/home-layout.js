import React, { Component } from 'react'
import { Layout, Card, Row, Col, Icon, Avatar, Divider } from 'antd'

import Logo from './components/client/logo/logo'
import User from './components/content/user'

import './home.less'

export default class Client extends Component {
    render() {
        return (
            <div className="client-waper">
                <Layout>
                    <Logo />
                    <Layout style={{ marginTop: 20 }}>
                        <div className="client-main">
                            <Row gutter={24} type="flex" justify="center">
                                {/* 个人信息 */}
                                <User />
                                {/* 内容 */}
                                <Col lg={15} md={14} sm={22} xs={22}>
                                    <Card bordered={false} >
                                        {this.props.children}
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Layout>
                </Layout>
            </div>
        )
    }
}