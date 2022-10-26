import React, { FC, useState, useEffect } from "react";
import { getFeaturedMovies } from "../../../utils";
import { verifySessionToken } from "../../../utils";
import MovieList from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar";
import useStore from "../../../config/globalStore";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../atoms/Loading";

interface Props {}

const Home: FC<Props> = (props) => {
	const navigate = useNavigate();
	const getToken = useStore((state: any) => state.token);
	const [showAnimation, setShowAnimation] = useState<any>(false);
	const getTokenSession = localStorage.getItem("token");
	const favoriteMovies = useStore((state: any) => state.favoriteMovies);

	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if (!checkSession) return navigate("/");
	}, [getTokenSession]);

	useEffect(() => {
		setShowAnimation(true);
		setTimeout(() => {
			setShowAnimation(false);
		}, 1000);
	}, [favoriteMovies]);

	const { isLoading, isError, data, error } = useQuery(
		["movies"],
		getFeaturedMovies
	);

	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				{showAnimation && <Loading />}
				<div className="flex flex-wrap -mx-4">
					{data &&
						data.map((movie: any) => (
							<MovieList key={movie.id} movie={movie} />
						))}
				</div>
			</div>
		</>
	);
};

export default Home;
