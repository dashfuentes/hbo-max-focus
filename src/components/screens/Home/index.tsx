import React, { FC, useState, useEffect } from "react";
import { getFeaturedMovies } from "../../../utils";
import { verifySessionToken } from "../../../utils";
import MovieList from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar";
import useStore from "../../../config/globalStore";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import Loading from '../../atoms/Loading'


interface Props {}

const Home: FC<Props> = (props) => {

	//const [featuredMovies, setFeaturedMovies] = useState<any[]>([]);
	const navigate = useNavigate()
	const getToken = useStore((state: any) => state.token);
	const getTokenSession = localStorage.getItem("token");
	//console.log("token from home", getTokenSession);

	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if(!checkSession) return navigate('/')
	}, [getTokenSession]);
	const { isLoading, isError, data, error } = useQuery(['movies'], getFeaturedMovies)

	if (isLoading) {
		return <Loading />;
	  }
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				<div className="flex flex-wrap -mx-4">
					{data && data.map((movie:any) => (
						<MovieList key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
