import React from 'react'
import ReactCanvas from 'react-canvas'
import Animate from '../../util/Animate'

var Image = ReactCanvas.Image;

export default class Octopus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: this.props.initLeft,
            top: this.props.initTop
        }
        // react state animation wrapper
        this._animate = new Animate(this)
    }

    clear() {
        return new Promise((resolve, reject) => {
            this.setState({top: this.props.initTop}, () => {
                resolve()
            })
        })
    }

    getPos() {
        return {
            l: this.state.left,
            t: this.state.top,
            w: this.props.width,
            h: this.props.height
        }
    }

    fall() {
        return new Promise((resolve, reject) => {
            var pos = this.getPos(),
                canvasH = this.props.canvasHeight,
                reverse = this.props.reverse,
                distance = reverse ? pos.t : canvasH - pos.t - pos.h,
                totalFallTime = 1000/*time for fall*/ * distance / canvasH
            this._animate
                .stop()
                .linear('top', reverse ? 0 : canvasH - pos.h, totalFallTime)
                .then(resolve)
        })
    }

    jump() {
        return new Promise((resolve, reject) => {
            var distance = 60, 
                operator = this.props.reverse ? -1 : 1
            this._animate
                .stop()
                .linear('top', this.state.top - (distance * operator), 200)
                .then(() => {
                    this._animate.linear('top', this.state.top + (distance * operator), 300)
                        .then(() => {
                            this.fall().then(resolve)
                        })
                })
        })
    }

    stop() {
        this._animate.stop()
    }

    getImageStyle() {
        var pos = this.getPos()
        return {
            position: 'absolute',
            zIndex: 4,  
            left: pos.l,
            top: pos.t,
            width: pos.w,
            height: pos.h
        }
    }

    render() {
        return <Image src='/img/octopus.png' style={this.getImageStyle(2)} fadeIn={true} />
    }
}
    
Octopus.defaultProps = {
    initLeft: 130,
    initTop: 225 - 28,
    width: 40,
    height: 28,
    canvasHeight: 0,
    reverse: false
}