
export const giphyReducer = (state=[], action) => {
	switch(action.type){

		case 'FETCH_GIF_SUCCESS':
			return action.gifs;

		default: 
			return state;
	}
}
export const isGifLoading = (state=[], action) => {
	switch(action.type){
		case 'GIF_IS_LOADING':
			return action.isGifLoading;
			
		default:
			return state;
	}
}
