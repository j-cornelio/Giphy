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
		var url = null;
		if(!this.props.isGifLoading && this.props.gifs.length === 0){
			return <h1>LOADING</h1>
		} else {
			return this.props.gifs.map( gif => {
				 url = "https://i." + gif.images['fixed_height_still'].url.slice(15)
		  		return <img key={gif.id} src={url} />	
			})
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