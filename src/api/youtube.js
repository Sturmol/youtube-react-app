import axios from 'axios';

const KEY = 'AIzaSyCLtmfaexcO9aWyBh2LoBuNQjXsKIfER-o';
const MAXRESULTS = 10;

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: MAXRESULTS,
		key: KEY
	}
});