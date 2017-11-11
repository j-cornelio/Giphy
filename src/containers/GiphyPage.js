import React, { Component } from 'react';
import * as giphyActions  	from '..//actions/giphyActions';
import { connect } 			from 'react-redux';

const GifsDisplay = ({gifs}) => {
	console.log('%c GIFS: ', 'background:beige', gifs);
	return <p>gifs</p>
}

class GiphyContainer extends Component{
	componentDidMount(){
		this.props.fetchGifs();
	}

	_renderGifs(){
		if(!this.props.isGifLoading && this.props.gifs.length === 0){
			return <h1>LOADING</h1>
		} else {
			console.log('gifs: ', this.props.gifs[0].images['480w_still'].url)

		  //return <img src={this.props.gifs[0].https://gph.is/1K8mLbF} />
		  //return <img src="https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg" />
		  return <img src="https://media4.giphy.com/media/piKXr2hEDsO1G/480w_s.jpg" />
		}
	}

	render(){
		return (
			<div>
				<h1>GIPHY</h1>
				{ this._renderGifs() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
		console.log('%c state: ', 'background:lime', state);

	return {
		gifs: state.gifs
	}
}

const mapDispatchProps = (dispatch) => {
	return {
		fetchGifs: () => dispatch( giphyActions.fetchGifs() )
	}
}

export default connect(mapStateToProps, mapDispatchProps)(GiphyContainer);