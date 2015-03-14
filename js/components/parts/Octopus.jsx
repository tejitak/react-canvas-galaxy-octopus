import React from 'react'
import ReactCanvas from 'react-canvas'
import $ from 'jquery'

var Image = ReactCanvas.Image;

export default class Octopus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: this.props.initLeft,
            bottom: this.props.initBottom
        }
    }

    clear() {
        this.setState({bottom: this.props.initBottom})
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
            var octopus = React.findDOMNode(this.refs.octopus),
                $octopus = $(octopus),
                reverse = this.props.reverse,
                octopusH = this.getPos().h,
                canvasH = this.props.canvasHeight,
                octopusBottom = parseInt(octopus.style.bottom)
            var distance = reverse ? canvasH - octopusBottom - octopusH : octopusBottom
            var totalFallTime = 1000/*time for fall*/ * distance / canvasH
            $octopus.stop().animate({
                bottom: reverse ? canvasH - octopusH : 0
            }, totalFallTime, 'linear', () => {
                resolve()
            }).css('transform', 'rotate(' + (reverse ? '-' : '') + '90deg)')
        })
    }

    jump() {
        return new Promise((resolve, reject) => {
            var $octopus = $(React.findDOMNode(this.refs.octopus)),
                reverse = this.props.reverse
            $octopus.css('transform', 'rotate(' + (reverse ? '' : '-') + '20deg)').stop().animate({
                bottom: (reverse ? '-' : '+') + '=60px'
            }, 200, () => {
                $octopus.css('transform', 'rotate(0deg)').stop().animate({
                    bottom: (reverse ? '+' : '-') + '=60px'
                }, 300, 'linear', () => {
                    this.fall().then(resolve)
                })
            })
        })
    }

    // stop() {
    //     $(React.findDOMNode(this.refs.octopus)).stop()
    // }

    getImageStyle() {
        return {
            position: 'absolute',
            // right: 0,
            left: this.state.left / 2,
            top: (this.props.canvasHeight - this.state.bottom - this.props.height) / 2,
            // bottom: this.state.bottom / 2,
            width: this.props.width,
            height: this.props.height
        }
    }

    render() {
        return <Image src='/img/octopus.png' style={this.getImageStyle()} fadeIn={true} />
    }
}

Octopus.defaultProps = {
    initLeft: 130,
    initBottom: 225,
    width: 40,
    height: 28,
    canvasHeight: 0,
    reverse: false
}