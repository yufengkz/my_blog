import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMenuTitle } from '../../redux/actions/menu'
import { Menu, Icon } from 'antd'
import { NavLink, withRouter } from 'react-router-dom'

import menuConfig from '../../config/menuConfig'
const { SubMenu } = Menu

class LeftMenu extends Component {
    state = {
        menuTreeNode: '',
        openKeys: ["/home"],
        currentKey: ''
    }
    rootSubmenuKeys = []

    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig)

        let rootMenu = []
        menuConfig.forEach(menu => {
            if (menu.children) {
                this.rootSubmenuKeys.push(menu.key)
            }
        })

        this.setState({
            menuTreeNode,
            openKeys: rootMenu
        })
    }
    componentDidMount() {
        console.log(this.props.match)
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((menu) => {
            if (menu.children) {
                return (
                    <SubMenu
                        key={menu.key}
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>{menu.title}</span>
                            </span>
                        }
                    >
                        {this.renderMenu(menu.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={menu.title} key={menu.key}>
                    <NavLink to={menu.key}>
                        <Icon type="pie-chart" />
                        <span>{menu.title}</span>
                    </NavLink>
                </Menu.Item>
            )
        })
    }

    handleClick = ({ item, key }) => {
        if (key === this.state.currentKey) {
            return false;
        }
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props
        dispatch(setMenuTitle(item.props.title))

        this.setState({
            currentKey: key
        });
        this.props.history.push(key)
        // browserHistory.push({pathname: key})
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)

        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            })
        }
    }

    render() {
        return (
            <Menu
                mode="inline"
                theme="dark"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
                style={{ width: '100%' }}
            >
                {this.state.menuTreeNode}
            </Menu>
        )
    }
}

export default connect()(withRouter(LeftMenu))
