import React, { FC, useEffect } from "react";
import ListItem from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar";
import { verifySessionToken } from "../../../utils";
import { useNavigate } from "react-router-dom";
import useStore from "../../../config/globalStore";
import Empty from "../Empty"

interface Props {}

const Favorite: FC<Props> = (props) => {
	const navigate = useNavigate()
	const getToken = useStore((state: any) => state.token);
	const getTokenSession = localStorage.getItem("token");
	const favoriteMovies = useStore((state: any) => state.favoriteMovies);
	
	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if(!checkSession) return navigate('/')
		
	}, [getTokenSession]);

	if(!favoriteMovies.length) return <Empty />

	return (
		<>
			<Navbar />
			<div className="container mx-auto"  >
			<div className="flex flex-wrap -mx-4">
					{favoriteMovies.map((movie: any) => (
					<ListItem key={movie.id} movie={movie} />
				))}
				</div>
			</div>
		</>
	);
};

export default Favorite;
