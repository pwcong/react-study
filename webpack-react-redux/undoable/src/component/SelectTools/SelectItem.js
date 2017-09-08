import React, {
    PropTypes
} from 'react'

export default class SelectItem extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		if(this.props.onClick)
			this.props.onClick(this.props.text)
	}

    render() {

    	if(this.props.onClick)
    		return (
    			<li style={{
                    fontSize: '24px',
                    color: 'orange',
                    margin: '10px',
                    display: 'inline-block',
    				textDecoration: 'underline',
    				cursor: 'pointer'
    				}}
    				onClick={this.handleClick}>
    				{this.props.text}
    			</li>
    		)
    	else
    		return (
    			<li style={{
                    fontSize: '24px',
                    margin: '10px',
                    display: 'inline-block'
                }}>
                    {this.props.text}
                </li>
    		)

    }

}

SelectItem.propTypes = {
	text: PropTypes.string.isRequired,
}