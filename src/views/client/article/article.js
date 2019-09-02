import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Tag, Icon } from 'antd'

export default class Article extends Component {
    state = {
        listData: [],
        page_size: 8,
        page: 1,
        total: 0
    }

    componentDidMount() {
        this.getArticleList()
    }

    getArticleList = async (page) => {
        let params = { page: page || this.state.page, page_size: this.state.page_size }
        let data = await this.axios.get(`/article/list`, { params })
        let listData = data.data.list
        let total = data.data.meta.total
        this.setState({
            listData, total
        })
    }
    goCurrentPage(page) {
        this.props.history.push({ path: '/article', params: page })
    }

    render() {
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        )
        return (
            <div className="client-article-list">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            this.goCurrentPage(page)
                            window.scrollTo(0, 0)
                            this.setState({
                                page
                            })
                            //this.getArticleList(page)
                        },
                        pageSize: this.state.page_size,
                        total: this.state.total,
                    }}
                    dataSource={this.state.listData}

                    renderItem={item => (
                        <List.Item
                            actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                <IconText type="message" text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={280}
                                    height={150}
                                    alt="logo"
                                    src={item.cover}
                                />
                            }
                        >
                            <List.Item.Meta
                                style={{ marginBottom: 10 }}
                                title={<a href={item.href}>{item.title}</a>}
                                description={
                                    <div className="client-article-des">
                                        <div>
                                            <Icon type="clock-circle" />
                                            <span>{item.created_at}</span>
                                        </div>
                                        <div>
                                            <Icon type="tags" />
                                            <span>{item.category.name}</span>
                                        </div>
                                    </div>
                                }
                            />
                            <Link className="client-article-link" to={'/detail/' + item.id} key={item.id}>
                                {item.introduction} <Icon type="double-right" />
                            </Link>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}