import React from 'react'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reverseGravity: props.setting.reverseGravity,
            pipeInterval: props.setting.pipeInterval,
            noHit: props.setting.noHit
        }
    }

    onChangeReverse() {
        this.setState({reverseGravity: !this.state.reverseGravity}, ()=>{
            this.props.onChangeSetting(this.state)
        })
    }

    onChangePipeInterval(e) {
        this.setState({pipeInterval: e.target.value}, ()=>{
            this.props.onChangeSetting(this.state)
        })
    }

    onChangeNoHit() {
        this.setState({noHit: !this.state.noHit}, ()=>{
            this.props.onChangeSetting(this.state)
        })
    }

    render() {
        return (
            <div className='settings'>
                <div>
                    <input id="input_reverseGravity" type='checkbox' checked={this.state.reverseGravity} onChange={this.onChangeReverse.bind(this)}/>
                    <label htmlFor="input_reverseGravity">Reverse gravity</label>
                </div>
                <div>
                    <label htmlFor="input_pipeInterval">Pipe Interval(ms)</label>
                    <input type="text" id="input_pipeInterval" value={this.state.pipeInterval} onChange={this.onChangePipeInterval.bind(this)}/>
                </div>
                <div>
                    <input id="input_noHit" type="checkbox" checked={this.state.noHit} onChange={this.onChangeNoHit.bind(this)}/>
                    <label htmlFor="input_noHit">No Hit (performance check purpose)</label>
                </div>
            </div>
        )
    }
}

Setting.defaultProps = {
    setting: {
        reverseGravity: false,
        pipeInterval: 1600,
        noHit: false
    },
    onChangeSetting: ()=>{}
}