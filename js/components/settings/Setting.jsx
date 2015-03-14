import React from 'react'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {reverseGravity: props.setting.reverseGravity}
    }

    onChangeSetting() {
        this.setState({reverseGravity: !this.state.reverseGravity}, ()=>{
            this.props.onChangeSetting(this.state)
        })
    }

    render() {
        return (
            <div className='settings'>
                <div>
                    <input id="input_reverseGravity" type='checkbox' checked={this.state.reverseGravity} onChange={this.onChangeSetting.bind(this)}/>
                    <label htmlFor="input_reverseGravity">Reverse gravity</label>
                </div>
            </div>
        )
    }
}

Setting.defaultProps = {
    setting: {
        reverseGravity: false
    },
    onChangeSetting: ()=>{}
}