import React, {useState, useEffect, useCallback} from 'react'
import {withRouter} from 'react-router-dom'
import { Card, Col, Divider, Tag } from 'antd'
import {_getUserInfo, _getTags, _getHotArticle} from '../../../../api/client'
import { random } from '../../../../lib/utils'

const User = props => {
    const [userInfo, setUserInfo] = useState({})
    const [tags, setTags] = useState([])
    const [hotArticle, setHotArticle] = useState([])
    useEffect(() => {
        const getUserInfo = async () => {
            let data = await _getUserInfo()
            setUserInfo(data.data)
        }
        const getTags = async () => {
            let data = await _getTags()
            setTags(data.data)
        }
        const getHotArticle = async () => {
            let data = await _getHotArticle()
            setHotArticle(data.data.list)
        }

        getUserInfo()
        getTags()
        getHotArticle()
        return () => {}
    }, [])
    
    const goDetail = useCallback((itemId) => {
        props.history.replace(`/detail/${itemId}`)
    }, [props.history])

    return (
        <Col lg={5} md={6} sm={0} xs={0}>
            <Card className="client-user" bordered={false} cover={<img src={userInfo.top_img} alt="" />}>
                <div className="client-user-avatar">
                    {/* <img style={{ width: 60, height: 60 }} src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="" /> */}
                    <h1>{userInfo.nick_name}</h1>
                    <p>{userInfo.introduce}</p>
                </div>
                <Divider dashed style={{margin: '10px 0'}}/>
                <div className="client-user-tags">
                    <h2>文章标签：</h2>
                    <div>
                        {
                            tags.map(item => <Tag color={`rgba(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`} key={item.id}>{item.name}</Tag>)
                        }
                    </div>
                </div>
                <Divider dashed style={{margin: '10px 0'}}/>
                <div className="client-user-article">
                    <h2>推荐文章：</h2>
                    <ul>
                        {
                            hotArticle.map((item, index) => (
                                <li key={item.id}>
                                    <span onClick={() => goDetail(item.id)}>{`${index + 1}.${item.title}`}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Card>
        </Col>
    )
}

export default withRouter(User)