import React from 'react'
import {
    connect
} from 'react-redux'
import {changeAsyncAction} from '../action'
import ShowChange from '../component/ShowChange'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(word){
		if(word&&word.trim()){
			this.props.dispatch(changeAsyncAction(word))
		}
	}

    render() {

        return (
        	<div>
        		<ShowChange word={this.props.word} onClick={this.handleClick}/>
        	</div>

        )

    }

}

function select(state) {
	return ({
		word: state.word
	})
}

export default connect(select)(App)