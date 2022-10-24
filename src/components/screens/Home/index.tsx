import React, { FC, useState, useEffect } from "react";
import { getFeaturedMovies } from "../../../utils";
import { verifySessionToken } from "../../../utils";
import MovieList from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar";
import useStore from "../../../config/globalStore";
import { useNavigate } from "react-router-dom";


interface Props {}

const Home: FC<Props> = (props) => {
	const [featuredMovies, setFeaturedMovies] = useState<any[]>([]);
	const navigate = useNavigate()
	const getToken = useStore((state: any) => state.token);
	const getTokenSession = localStorage.getItem("token");
	//console.log("token from home", getTokenSession);

	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if(!checkSession) return navigate('/')
		getFeaturedMovies()
			.then((features) => {
				console.log("movies", features);
				setFeaturedMovies(features);
			})
			.catch((e) => console.log(e));
	}, [getTokenSession]);
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
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
