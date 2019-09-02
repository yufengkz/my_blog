import React, { Component } from 'react'
import { Layout } from 'antd'
import LeftMenu from '../../components/menu'
import './admin.less'

const { Header, Footer, Sider, Content } = Layout

export default class AdminLayout extends Component {
    render() {
        return (
            <div className="admin-wraper">
                <Layout>
                    <Sider
                        width={250}
                        style={{height: '100vh'}}
                        breakpoint="lg"
                        collapsedWidth="0" 
                    >
                        <div className="logo" >Logo</div>
                        <LeftMenu />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0' }}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>,
            </div>
        )
    }
}