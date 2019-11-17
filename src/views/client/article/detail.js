import React, { useState, useEffect } from 'react'
import { Row, Icon, Card, Skeleton } from 'antd'
import translateMarkdown from '../../../lib/marked'
import { _getDetail } from '../../../api/client'

const Detail = props => {
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const getDetail = async () => {
            setLoading(true)
            let id = props.match.params.id
            let data = await _getDetail(id)
            setDetail(data.data)
            setContent(data.data.content)
            setLoading(false)
        }
        getDetail()
        return () => {}
    }, [props.location, props.match.params.id]) //监控路由变化

    return (
        <Skeleton active loading={loading} paragraph={{ rows: 30 }}>
            <div className="client-detail">
                <Row>
                    <h1 className="client-home-title">
                        <Icon type="profile" style={{ color: '#636363' }} />
                        <span>&nbsp;&nbsp;{detail.title}</span>
                    </h1>
                </Row>
                <Row gutter={20} className="client-article-content">
                    <Card bordered={false} style={{ width: '100%' }}>
                        <div dangerouslySetInnerHTML={{ __html: translateMarkdown(content) }} />
                    </Card>
                </Row>
            </div>
        </Skeleton>
    )
}

export default Detail