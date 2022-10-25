import React, { FC, useState, useEffect } from "react";
import Navbar from "../../atoms/Navbar";
import { getMovieDetails } from "../../../utils";
import { verifySessionToken } from "../../../utils";
import { useNavigate, useLocation } from "react-router-dom";
import useStore from "../../../config/globalStore";

interface Props {}

const MovieDetail: FC<Props> = (props) => {
	const navigate = useNavigate()
	const getToken = useStore((state: any) => state.token);
	const getTokenSession = localStorage.getItem("token");
	const [movieDetails, setMovieDetails] = useState<any>({});
	const [movieProdCompanies, setmovieProdCompanies] = useState<any[]>([]);
	const location = useLocation();
	const getMovieIdFromHomePage = location.state.id && location.state.id !== undefined? location.state.id : "";
	console.log("reading movie id", getMovieIdFromHomePage);

	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if(!checkSession) return navigate('/')
		getMovieDetails(getMovieIdFromHomePage)
			.then((data) => {
				const movieDetailObj = data;
				const productionDetails = movieDetailObj.production_companies;
				console.log("movies details", movieDetailObj);
				setMovieDetails(movieDetailObj);
				setmovieProdCompanies(productionDetails);
			})
			.catch((e) => console.log(e));
	}, [getTokenSession]);

	return (
		<>
			<Navbar />
			<div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
				<img
					className="px-20 pt-1 w-9/12"
					src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`}
					alt="Sunset in the mountains"
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-4xl mb-2 text-white">
						{movieDetails.title}
					</div>
					<p className="text-white text-base">{movieDetails.overview}</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					{movieProdCompanies.map((company) => (
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{company.name}
						</span>
					))}
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
