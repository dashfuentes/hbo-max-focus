import React, { FC, useState, useEffect } from "react";
import { getFeaturedMovies } from "../../../utils";
import MovieList from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar"
import useStore from "../../../config/globalStore";
import { useNavigate } from "react-router-dom";

interface Props {}

const Home: FC<Props> = (props) => {
	const navigate = useNavigate();
	const [featuredMovies, setFeaturedMovies] = useState<any[]>([]);
	//const [isLoggedin, setIsLoggedin] = useState<Boolean>(false);
	const getToken = useStore((state: any) => state.token);
	console.log('token from home', getToken.token)
	
	//make utils fn
	const verifySessionToken = (tokenObj: any) => {
		console.log('token from verify', tokenObj)
		if (tokenObj.token == "") return  navigate("/");
		
		
	}
	useEffect(() => {
		verifySessionToken(getToken)
		getFeaturedMovies()
			.then((features) => {
				console.log("movies", features.results);
				setFeaturedMovies(features.results);
			})
			.catch((e) => console.log(e));
	}, [getToken]);
	return (
		<>
		<Navbar />
			<div className="container mx-auto"  >
			<div className="flex flex-wrap -mx-4">
			
				{featuredMovies.map((movie) => (
					<MovieList key={movie.id} movie={movie} />
				))}
					</div>
			
			</div>
			</>
	);
};

export default Home;
