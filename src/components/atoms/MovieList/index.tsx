import React, { FC, useState } from "react";
import { body } from "../../../config/globalStyles";
import useStore from "../../../config/globalStore";
import { Link } from "react-router-dom";

interface movie {
	movie: any;
}

const MovieList: FC<movie> = ({ movie }) => {
	const addMoviesToFavorite = useStore((state) => state.addMovies);

	/**
	 * This function adds a new movie object to the local/zustand storage
	 *
	 * @fn
	 */
	const addToFavorites = () => {
		let moviesFromStorage = JSON.parse(localStorage.getItem("movies") || "[]");
		console.log("moviesFromStorage", moviesFromStorage);
		moviesFromStorage.push(movie);
		localStorage.setItem("movies", JSON.stringify(moviesFromStorage));

		return addMoviesToFavorite({
			id: movie.id,
			title: movie.title,
			poster_path: movie.backdrop_path,
			release_date: movie.release_date,
			popularity: movie.popularity,
			overview: movie.overview,
		});
	};

	//replace with Link
	return (
		<div data-id={movie.id} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/5 p-4">
			<Link
				className="c-card block  shadow-md hover:shadow-xl rounded-lg overflow-hidden"
				style={body}
				to="/movie-details"
				state={{ id: parseInt(movie.id) }}
			>
				<div className=" overflow-hidden">
					<img
						className="w-full "
						src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
						alt={movie.title}
					/>
				</div>
				<div className="p-4">
					<span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
						Popular
					</span>
					<div className="text-container w-48">
						<h2 className="text-1xl pb-4 pt-2 font-medium text-white">
							{movie.title}
						</h2>
					</div>

					<p className="text-sm text-white line-clamp-3">{movie.overview}</p>
				</div>
				<div className="p-4 border-t border-b text-xs text-white">
					<span className="flex items-center mb-1">
						Release Date:
						<i className="far fa-clock fa-fw mr-2 text-gray-900"></i>{" "}
						{movie.release_date}
					</span>
					<span className="flex items-center">
						Popularity
						<i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
						{movie.popularity}
					</span>
				</div>
				<div className="p-4 flex items-center text-sm text-white">
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 fill-current text-yellow-500"
					>
						<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
					</svg>
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 fill-current text-yellow-500"
					>
						<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
					</svg>
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 fill-current text-yellow-500"
					>
						<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
					</svg>
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 fill-current text-yellow-500"
					>
						<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
					</svg>
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4 fill-current text-gray-400"
					>
						<path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
					</svg>
					<span className="ml-2">{movie.vote_average}</span>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							addToFavorites();
						}}
						className="text-grey-darkest font-bold py-2 px-4 ml-4 rounded inline-flex items-center"
						style={body}
					>
						<span className="text-xs">Add to Favorite</span>
					</button>
				</div>
			</Link>
		</div>
	);
};

export default MovieList;
