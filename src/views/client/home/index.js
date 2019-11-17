import React, { Component } from 'react'
import { Row, Icon, Card, Col } from 'antd'

const { Meta } = Card
export default class ClientHome extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
        this.getWorkList()
    }
    getWorkList = async () => {
        let data = await this.axios.get('/work/list')
        this.setState({data: data.list})
    }
    render() {
        const CardItem = this.state.data.map(item => (
            <Col key={item.id} lg={6} md={6} sm={8} xs={12} style={{ margin: '8px 0 12px 0' }}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Card
                    hoverable
                    style={{ width: '100%'}}
                    cover={<img style={{width: '100%', height: 120}} src={item.cover} alt="" />}
                >
                    <Meta title={item.title} description={item.introduction} />
                </Card>
                </a>
            </Col>
        ))
        return (
            <div className="client-home">
                <div className="client-home-fllow">
                    <Row>
                        <h1 className="client-home-title"><Icon type="profile" style={{color: '#636363'}} /><span>我的作品</span></h1>
                    </Row>
                    <Row gutter={20} className="home-content">
                        {CardItem}
                    </Row>
                </div>
                {/* <div className="client-home-fllow">
                    <Row>
                        <h1 className="client-home-title"><Icon type="profile" /><span>我的作品</span></h1>
                    </Row>
                    <Row gutter={20} className="home-content">
                        {}
                    </Row>
                </div> */}
            </div>
        )
    }
}