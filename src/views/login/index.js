import React, { useContext, createContext, useReducer } from 'react'
import {Button} from 'antd'

const ColorContext = createContext()
const UPDATA_COLOR = 'UPDATA_COLOR'
const reducer = (state, action) => {
    switch(action.type){
        case UPDATA_COLOR:
            return action.color
        default:
            return state
    }
}
const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}

function Area (){
    const {color} = useContext(ColorContext)
    return <span style={{color}}>当前主题色：{color}</span>
}

function Buttons (){
    let {dispatch} =  useContext(ColorContext)
    return(
        <div>
            <Button onClick={() => {
                dispatch({type: UPDATA_COLOR, color: 'red'})
            }}>红色</Button>
            <Button onClick={() => {
                dispatch({type: UPDATA_COLOR, color: 'yellow'})
            }}>黄色</Button>
        </div>
    )
}

function Login (){
    return (
        <div>
            <Color>
                <Area />
                <br/>
                <Buttons />
            </Color>
        </div>
    )
}

export default Login