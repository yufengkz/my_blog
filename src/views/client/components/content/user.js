import React from 'react'
import {Link}  from 'react-router-dom'
import { Card, Col, Divider, Tag } from 'antd'

const User = () => {
    return (
        <Col lg={5} md={6} sm={0} xs={0}>
            <Card className="client-user" bordered={false} cover={<img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
                <div className="client-user-avatar">
                    {/* <img style={{ width: 60, height: 60 }} src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" /> */}
                    <h1>你若在风里</h1>
                    <p>热爱软件行业，对IT领域的软件开发和设计工作有着浓厚的兴趣，而且能承受较大的工作压力；具有很强的团队合作精神，有良好的组织、协调和沟通能力，有强烈的集体荣誉感；工作认真负责，积极上进，能吃苦耐劳，有良好的职业素质。</p>
                </div>
                <Divider dashed style={{margin: '10px 0'}}/>
                <div className="client-user-tags">
                    <h2>文章标签：</h2>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div>
                </div>
                <Divider dashed style={{margin: '10px 0'}}/>
                <div className="client-user-article">
                    <h2>推荐文章：</h2>
                    <ul>
                        <li>
                            <Link>1.免费视频离线高清版下载（共350集）</Link>
                        </li>
                        <li>
                            <Link>2.每周至少两篇文章分享</Link>
                        </li>
                        <li>
                            <Link>3.收费视频半价购买特权(最高省302元)</Link>
                        </li>
                    </ul>
                </div>
            </Card>
        </Col>
    )
}

export default User