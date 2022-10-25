import React, { FC, useState, useEffect } from "react";
import { getMoviesByName } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Logout from "../../atoms/Logout";
interface Props {}

const SearchInput: FC<Props> = (props) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	//const [searchResults, setSearchResults] = useState<any[]>([]);
	const navigate = useNavigate();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleKeyDown = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// 👇️ your logic here
			console.log('Enter key pressed ✅');
			return getMovies(searchTerm);
		  }
	}

	const getMovies = (searchTerm: any) => {
		getMoviesByName(searchTerm)
			.then((data) => {
				console.log("movies by name", data);

				navigate("/search-movies", { state: { data: data } });
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<div className="flex md:flex-1 py-2">
				<div className="flex gap-2">
					<div className="items-center pl-3 pointer-events-none absolute mt-2">
						<svg
							className="w-5 h-5 text-gray-500"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Search icon</span>
					</div>
					<input
						type="text"
						value={searchTerm}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						id="search-navbar"
						className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search..."
					/>
					<button
						onClick={() => {
							return getMovies(searchTerm);
						}}
						
						className="text-white  right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
					<Logout />
				</div>
			</div>
		</>
	);
};

export default SearchInput;
