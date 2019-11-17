import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Steps, Icon } from 'antd'
import { getUserInfo } from '../../../redux/actions/user'
const { Step } = Steps
const About = (props) => {
    let { userInfo, dispatch } = props
    useEffect(() => {
        dispatch(getUserInfo())
        return () => {
        }
    }, [dispatch])
    // const dateSelectorCbs = useMemo(() => {
    //     return bindActionCreators(
    //         {
    //             onBack: hideDateSelector,
    //         },
    //         dispatch
    //     );
    // }, [])

    return (
        <div className="client-about-waper">
            <Row>
                <h1 className="client-about-title">
                    <Icon type="container" style={{ color: '#636363' }} />
                    <span>博客简述</span>
                </h1>
            </Row>
            <Row gutter={20} className="about-content">
                <Col lg={24} >
                    <p className="desc">前端打杂人员，略微代码洁癖</p>
                    <p className="desc">本博客使用的技术为 react v16.9 + antd + koa2 + mysql 源码地址为 <a href="https://github.com/yufengkz">github</a>，仅供参考，不做商业用途！麻烦点个小星星，拜托了！</p>
                </Col>
            </Row>
            <Row>
                <h1 className="client-about-title">
                    <Icon type="user" style={{ color: '#636363' }} />
                    <span>关于我</span>
                </h1>
            </Row>
            {
                !userInfo ? null : <Row gutter={20} className="about-content">
                    <Col lg={24} style={{ margin: '8px 0 12px 0' }}>
                        <Steps progressDot status="wait" direction="vertical">
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 16}} />} 
                                title="姓名"
                                description={
                                    <p style={{ margin: 0, paddingLeft: 10 }}>{userInfo.nick_name}</p>
                                }
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 14}} />} 
                                title="联系方式"
                                description={
                                    <p style={{ margin: 0, paddingLeft: 10 }}>{'qq:65370392 | wx:65370392 | email: yufeng.org@gmail.com'}</p>
                                }
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 16}} />} 
                                title="gitHub"
                                description={
                                    <p style={{ margin: 0, paddingLeft: 10 }}>https://github.com/yufengkz</p>
                                }
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 14}} />} 
                                title="坐标"
                                description={
                                    <p style={{ margin: 0, paddingLeft: 10 }}>北京</p>
                                }
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 14}} />} 
                                title="技能"
                                description={userInfo.skills.split('|').map(item => {
                                    return <p key={item} style={{ margin: 0, paddingLeft: 10 }}>{item}</p>
                                })}
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 14}} />} 
                                title="个人"
                                description={userInfo.favorite.split('|').map(item => {
                                    return <p key={item} style={{ margin: 0, paddingLeft: 10 }}>{item}</p>
                                })}
                            />
                            <Step
                                //icon={<Icon type="smile" style={{fontSize: 14}} />} 
                                title="其他"
                                description={userInfo.others.split('|').map(item => {
                                    return <p key={item} style={{ margin: 0, paddingLeft: 10 }}>{item}</p>
                                })}
                            />
                        </Steps>
                    </Col>
                </Row>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return state
}

const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch)
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)