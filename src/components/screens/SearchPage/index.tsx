import React, { FC, useState, useEffect } from "react";
import ListItem from "../../atoms/MovieList";
import Navbar from "../../atoms/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { verifySessionToken } from "../../../utils";
import useStore from "../../../config/globalStore";

interface Props {}

const SearchPage: FC<Props> = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
    //Get data results from the router-dom state
	const searchResults = location.state.data && location.state.data.length ? location.state.data : [];
	//Get token session LS/Store
	const getToken = useStore((state: any) => state.token);
	const getTokenSession = localStorage.getItem("token");

	/**
	 * Verify current session to be aware of the token status in the application
	 *
	 * @fn
	 */
	useEffect(() => {
		const checkSession = verifySessionToken(getToken, getTokenSession);
		if (!checkSession) return navigate("/");
	}, [getTokenSession]);

	return (
		<>
			<Navbar />
			<div className="container mx-auto">
				<div className="flex flex-wrap -mx-4">
					{searchResults.map((movie: any) => (
						<ListItem key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</>
	);
};

export default SearchPage;
