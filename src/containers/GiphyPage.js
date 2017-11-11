import React, { Component } from 'react';
import * as giphyActions  	from '..//actions/giphyActions';
import { connect } 			from 'react-redux';
import PropTypes  			from 'prop-types';

const Gifs = ({gifs, isGifLoading}) => {
	console.log('%c gifs: ', 'background:beige', gifs);
	var url = null;
	if(!isGifLoading && gifs.length === 0){
		return <h1>LOADING</h1>
	} else {
		const results = gifs.map( gif => {
			 url = "https://i." + gif.images['fixed_height_still'].url.substring(15)
	  		return <img key={gif.id} src={url} />	
		})

		return results;
	}
}

class GiphyContainer extends Component{
	componentDidMount(){
		this.props.fetchGifs();
	}

	render(){
		return (
			<div>
				<h1>GIPHY</h1>
				<Gifs {...this.props} />
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


GiphyContainer.propTypes = {
  GiphyContainer: PropTypes.array,
};