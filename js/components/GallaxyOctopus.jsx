import React from 'react'
import Canvas from './Canvas'
import Setting from './settings/Setting'

export default class GallaxyOctopus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setting: {
                reverseGravity: true
            }
        }
        React.initializeTouchEvents(true)
    }

    onChangeSetting(setting) {
        // set game parameter
        this.setState({ setting: setting })
    }

    render() {
        return (
            <div>
                <Canvas setting={this.state.setting} style={{cursor:'pointer'}} />
                <Setting setting={this.state.setting} onChangeSetting={this.onChangeSetting.bind(this)} />
            </div>
        )
    }
}