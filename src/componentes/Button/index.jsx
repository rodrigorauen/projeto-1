import { Component } from "react";
import './styles.css'

export class Button extends Component {
    render() {
        // Poderia pegar as props dessa forma também
        // const {text} = this.props;
        const {disabledProps} = this.props
        return (
            <button 
                className='button' 
                onClick={this.props.onClickProps}
                disabled={disabledProps}
            >
                    {this.props.text}
            </button>
        )
    }
}