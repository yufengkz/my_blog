import React, {Component} from 'react'
import {increment, decrement, reset} from '../redux/actions/counter'
import { Button } from 'antd'

import {connect} from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <Button onClick={() => this.props.increment()} type='primary'>自增
                </Button>
                <Button onClick={() => this.props.decrement()} type='primary'>自减
                </Button>
                <Button onClick={() => this.props.reset()} type='primary'>重置
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)