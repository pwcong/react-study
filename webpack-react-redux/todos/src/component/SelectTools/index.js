import React, {
    PropTypes
} from 'react'

import SelectItem from './SelectItem'

export default class SelectTools extends React.Component {

    render() {

        return (

        	<div>
        		<ul>
        			{this.props.selects.map(select => {
        				if(this.props.select===select)
        					return <SelectItem text={select} key={select}/>
        				else
        					return <SelectItem text={select} key={select} onClick={this.props.onSelectItemClickListener}/>
        			})}

        		</ul>
        	</div>
        )
    }
}

SelectTools.propTypes = {
	selects: PropTypes.array.isRequired,
	select: PropTypes.string.isRequired,
	onSelectItemClickListener: PropTypes.func.isRequired
}