import React from 'react'
import Canvas from './Canvas'
import Setting from './settings/Setting'
import CanvasUtilPatch from '../patch/CanvasUtilPatch'

// main react component
export default class GallaxyOctopus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setting: {
                reverseGravity: true,
                pipeInterval: 1600,
                noHit: false
            }
        }
        React.initializeTouchEvents(true)
    }

    onChangeSetting(setting) {
        // set game parameter
        this.setState({ setting: setting }, () => {
            this.refs.canvas.reset()
        })
    }

    render() {
        return (
            <div>
                <Canvas ref="canvas" setting={this.state.setting} />
                <Setting setting={this.state.setting} onChangeSetting={this.onChangeSetting.bind(this)} />
            </div>
        )
    }
}