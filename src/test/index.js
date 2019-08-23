import React, { Component } from 'react'
import { Button } from 'antd'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="test">
                <Button type='primary'>antd button</Button>
            </div>    
        )
    }
}
 
export default Test