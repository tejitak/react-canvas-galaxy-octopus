import React from 'react'
import ReactCanvas from 'react-canvas'
import $ from 'jquery'

var Group = ReactCanvas.Group
var Image = ReactCanvas.Image;

export default class Pipe extends React.Component {
    constructor(props) {
        super(props)
        // initialize state
        this.state = {
            x: this.props.canvasWidth / 2
        }
    }

    componentDidMount() {
        this._animationStartTime = Date.now()
        this._pendingAnimationFrame = requestAnimationFrame(this.stepThroughAnimation.bind(this))
    }

    componentWillUnmount() {
        this.stop()
    }

    stepThroughAnimation() {
        var progress = (Date.now() - this._animationStartTime) / (this.props.pipeInterval * 2),
            x = this.props.canvasWidth - (progress * this.props.canvasWidth)
        this.setState({x: x}, ()=>{
            console.log(x)
            if(x > 0) {
                this._pendingAnimationFrame = requestAnimationFrame(this.stepThroughAnimation.bind(this))
            }
        })
    }

    getGapPos() {
        return {
            w: this.props.pipeWidth,
            h: this.props.gapHeight,
            t: this.props.topHeight,
            l: this.state.x
        }
    }

    stop() {
        if(this._pendingAnimationFrame) {
            cancelAnimationFrame(this._pendingAnimationFrame)
        }
    }

    getGroupStyle() {
        console.log(this.state.x)
        return {
            position: 'absolute',
            left: this.state.x,
            top: 0,
            width: this.props.pipeWidth,
            height: this.props.pipeHeight
        }
    }

    getTopHalfStyle() {
        return {
            position: 'absolute',
            left: this.state.x,
            bottom: (this.props.bottomHeight + this.props.gapHeight) / 2,
            width: this.props.pipeWidth,
            height: this.props.pipeHeight
        }
    }

    getBottomHalfStyle() {
        return {
            position: 'absolute',
            left: this.state.x,
            top: (this.props.topHeight + this.props.gapHeight) / 2,
            width: this.props.pipeWidth,
            height: this.props.pipeHeight
        }
    }

    render() {
        return (
            <Group style={this.getGroupStyle()}>
                <Image src='/img/pipe.png' style={this.getTopHalfStyle()} />
                <Image src='/img/pipe.png' style={this.getBottomHalfStyle()} />
            </Group>
        )
    }
}

Pipe.defaultProps = {
    pipeWidth: 60,
    pipeHeight: 450,
    pipeInterval: 0,
    canvasWidth: 0,
    gapHeight: 0
}