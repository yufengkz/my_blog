import React, { Component } from 'react'
import { Layout, Card, Row, Col, Divider } from 'antd'

export default class Content extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Layout style={{ marginTop: 20 }}>
                <div className="client-main">
                    <Row gutter={24} type="flex" justify="center">
                        <Col lg={5} md={6} sm={0} xs={0}>
                            <Card bordered={false} cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
                                <div>
                                    <img style={{ width: 60, height: 60 }} src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" />
                                </div>
                                <Divider dashed />
                                <div>
                                    asd
                                            </div>
                                <Divider dashed />
                                <div>
                                    asd
                                            </div>
                                <Divider dashed />
                                <div>
                                    asd
                                            </div>
                            </Card>
                        </Col>

                        {/* right */}
                        <Col lg={15} md={14} sm={22} xs={22}>
                            <Card bordered={false} >
                                {this.props.children}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout>
        )
    }
}