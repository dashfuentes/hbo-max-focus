import axios from 'axios';
import key from "../config/keys.json";

export const getFeaturedMovies = async () => {
    try {
        let response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${key.api_key}`,
		);
		
		var data = response.data.results;
		var cleanMovieArr = data.filter((line: any) => { return line.title !== undefined })
		return cleanMovieArr
	
    } catch (error) {
        console.log(error);
    }
}


export const getMoviesByName = async (name: string) => {
	try {
		let response = await axios.get(
			`https://api.themoviedb.org/3/search/multi?api_key=${key.api_key}&query=${name}`,
		);
		var data = response.data.results;
		var cleanMovieArr = data.filter((line: any) => { return line.title !== undefined })
		console.log('after clean', cleanMovieArr)
		return cleanMovieArr
	} catch (error) {
		console.log(error);
	}
};

export const getMovieDetails = async (id: number) => {
	try {
		let response = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${key.api_key}`,
		);
		
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const verifySessionToken = (tokenObj: any, tokenStorage:any) => {
	if (!tokenStorage && tokenObj.token == '') return false;
	return true
}