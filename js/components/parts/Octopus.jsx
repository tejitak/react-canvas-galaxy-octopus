import React from 'react'
import ReactCanvas from 'react-canvas'

var Image = ReactCanvas.Image;

export default class Octopus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: this.props.initLeft,
            top: this.props.initTop
        }
    }

    clear() {
        this.setState({top: this.props.initTop})
    }

    getPos() {
        var styles = this.getImageStyle()
        return {
            w: styles.width,
            h: styles.height,
            t: styles.top,
            l: styles.left
        }
    }

    fall() {
        return new Promise((resolve, reject) => {
            // var octopus = React.findDOMNode(this.refs.octopus),
            //     $octopus = $(octopus),
            //     reverse = this.props.reverse,
            //     octopusH = this.getPos().h,
            //     canvasH = this.props.canvasHeight,
            //     octopusBottom = parseInt(octopus.style.bottom)
            // var distance = reverse ? canvasH - octopusBottom - octopusH : octopusBottom
            // var totalFallTime = 1000/*time for fall*/ * distance / canvasH
            // $octopus.stop().animate({
            //     bottom: reverse ? canvasH - octopusH : 0
            // }, totalFallTime, 'linear', () => {
            //     resolve()
            // }).css('transform', 'rotate(' + (reverse ? '-' : '') + '90deg)')
            var pos = this.getPos()
            console.log("fall start")
            resolve()
        })
    }

    jump() {
        return new Promise((resolve, reject) => {
            // var $octopus = $(React.findDOMNode(this.refs.octopus)),
            //     reverse = this.props.reverse
            // $octopus.css('transform', 'rotate(' + (reverse ? '' : '-') + '20deg)').stop().animate({
            //     bottom: (reverse ? '-' : '+') + '=60px'
            // }, 200, () => {
            //     $octopus.css('transform', 'rotate(0deg)').stop().animate({
            //         bottom: (reverse ? '+' : '-') + '=60px'
            //     }, 300, 'linear', () => {
            //         this.fall().then(resolve)
            //     })
            // })
            console.log("jump with reverse :" + this.props.reverse)
            resolve()
        })
    }

    stop() {
    //     $(React.findDOMNode(this.refs.octopus)).stop()
    }

    getImageStyle() {
        return {
            position: 'absolute',
            // right: 0,
            left: this.state.left,
            top: this.state.top,
            // top: (this.props.canvasHeight - this.state.bottom - this.props.height) / 2,
            // bottom: this.state.bottom / 2,
            width: this.props.width,
            height: this.props.height
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