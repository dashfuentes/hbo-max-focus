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

export const login = async (email: any, password:any) => {
	try {
			let response = await axios.post("https://reqres.in/api/login", {
				email: email,
				password: password,
			})
			return response
	} catch (error) {
		console.log(error)
	}
}