import React from 'react'
import ReactCanvas from 'react-canvas'
import Loop from '../../util/Loop'

var Group = ReactCanvas.Group
var Image = ReactCanvas.Image;

export default class Pipe extends React.Component {
    constructor(props) {
        super(props)
        // initialize state
        this.state = {
            x: this.props.canvasWidth
        }
    }

    componentDidMount() {
        this._loop = new Loop(this.move.bind(this))
        this._loop.start()
    }

    componentWillUnmount() {
        this.stop()
    }

    move() {
        var progress = this._loop.timeDiff() / (this.props.pipeInterval * 2),
            pw = this.props.pipeWidth,
            distance = this.props.canvasWidth + pw,
            x = (distance - (progress * distance)) - pw
        if(x > -pw) {
            this.setState({x: x})
            return true
        }
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
        this._loop.end()
    }

    getGroupStyle() {
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
            bottom: (this.props.bottomHeight + this.props.gapHeight),
            width: this.props.pipeWidth,
            height: this.props.pipeHeight
        }
    }

    getBottomHalfStyle() {
        return {
            position: 'absolute',
            left: this.state.x,
            top: (this.props.topHeight + this.props.gapHeight),
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