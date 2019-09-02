import React, { Component } from 'react'
import { Row, Icon, Card, Skeleton } from 'antd'
import translateMarkdown from '../../../lib/marked'

class Detail extends Component {
    state = {
        loading: false,
        id: '',
        detail: '',
        content: ''
    }
    componentWillMount() {
        this.getDetail()
    }
    getDetail = async () => {
        this.state.loading = true
        let id = this.props.match.params.id
        let data = await this.axios.get(`/article/detail/${id}`)
        this.setState({ detail: data.data, content: data.data.content })
        this.setState({ loading: false })
    }
    render() {
        const content = translateMarkdown(this.state.content)
        return (
            <Skeleton active loading={this.state.loading} paragraph={{ rows: 30 }}>
                <div className="client-detail">
                    <Row>
                        <h1 className="client-home-title">
                            <Icon type="profile" style={{ color: '#636363' }} />
                            <span>&nbsp;&nbsp;{this.state.detail.title}</span>
                        </h1>
                    </Row>
                    <Row gutter={20} className="client-article-content">
                        <Card bordered={false} style={{ width: '100%' }}>
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </Card>
                    </Row>
                </div>
            </Skeleton>
        )
    }
}

export default Detail