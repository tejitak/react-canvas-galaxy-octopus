import React from 'react'
import ReactCanvas from 'react-canvas'

var Text = ReactCanvas.Text
var FontFace = ReactCanvas.FontFace

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Text style={this.getLabelStyle()}> {this.props.count} </Text>
    }

    getLabelStyle() {
        return {
            fontFace: FontFace('Georgia'),
            fontSize: 32,
            lineHeight: 28,
            height: 38,
            marginTop: 20,
            color: '#fff',
            textAlign: 'center'
        }
    }
}

Counter.propTypes = {
    count: React.PropTypes.number
}

Counter.defaultProps = {
    count: 0
}