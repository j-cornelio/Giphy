import React, { Component } from 'react';
import * as giphyActions  	from '..//actions/giphyActions';
import { connect } 			from 'react-redux';
import PropTypes  			from 'prop-types';

const Gifs = ({gifs, isGifLoading}) => {
	//console.log('%c gifs: ', 'background:beige', gifs);
	if(!isGifLoading && gifs.length === 0){
		return <h1>LOADING...PLEASE BE PATIENT</h1>
	} else {
		const results = gifs.map( gif => {
		  	return <video key={gif.id} id="gif-mp4" poster={gif.images['fixed_width'].url} style={{margin:'0', padding:'0', width:'200',  height:'113'}} autoPlay="" loop="">
	            <source src={gif.images['fixed_width'].mp4} type="video/mp4"></source>
	            Your browser does not support the mp4 video codec.
	        </video>
		})

		return results;
	}
}

class GiphyContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			search: 'pizza'
		}
	}
	componentDidMount(){
		this.props.fetchGifs();

	}

	render(){
		var input = null;
		return (
			<div>
				<div>
					<h1>Search Gif</h1>
					<input ref={(node) => input = node} />
					<button onClick={()=>{
						this.setState({search: input.value})
					}}>seach</button>
					<h1>{this.state.search}</h1>
				</div>
				<Gifs {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
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