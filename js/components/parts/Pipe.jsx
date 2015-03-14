import React from 'react'
import $ from 'jquery'

export default class Pipe extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var pipe = React.findDOMNode(this.refs.pipe),
            $pipe = $(pipe)
        $pipe.animate({
            right: '+=' + (this.props.canvasWidth + pipe.offsetWidth) + 'px'
        }, this.props.pipeInterval * 2, 'linear')
    }

    getGapPos() {
        var pipe = React.findDOMNode(this.refs.pipe),
            box = pipe.getBoundingClientRect()
        return {
            w: pipe.offsetWidth,
            h: this.props.gapHeight,
            t: this.props.topHeight,
            l: box.left
        }
    }

    stop() {
        $(React.findDOMNode(this.refs.pipe)).stop()
    }

    getPageStyle() {
        return {
            position: 'absolute',
            left: 0,
            top: 0,
            width: 60,
            height: 450
        }
    }

    getImageStyle() {
        return {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: 60,
            height: 450
        }
    }

    render() {
        return (
            <Group style={this.getPageStyle()}>
                <Image src='/img/pipe.png' style={this.getImageStyle()} />
                <Image src='/img/pipe.png' style={this.getImageStyle()} />
            </Group>
        )
    }
}

Pipe.defaultProps = {
    pipeInterval: 0,
    canvasWidth: 0,
    gapHeight: 0
}