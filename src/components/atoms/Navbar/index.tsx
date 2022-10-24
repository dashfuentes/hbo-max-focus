import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-hbo-max.jpg";
import SearchInput from "../../atoms/SearchInput";
import { body } from "../../../config/globalStyles";

const Navbar = () => {
	return (
		<>
			<nav className="" style={body}>
				<div className="flex flex-wrap justify-between items-center mx-auto container">
					<a href="#" className="flex items-center">
						<img src={logo} className="mr-3 h-8 sm:h-10" alt="logo" />
					</a>
					<button
						data-collapse-toggle="mobile-menu"
						type="button"
						className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul className="flex flex-col p-4 mt-4  rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<Link
									className="nav-link block py-2 pr-4 pl-3 0 rounded md:bg-transparent  md:p-0  text-xl pb-4 pt-2 font-medium text-white"
									to="/home"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="nav-link block py-2 pr-4 pl-3 0 rounded md:bg-transparent     pt-2 text-xl text-white"
									to="/favorite-movie"
								>
									Favorites
								</Link>
							</li>

							<li>
								<SearchInput />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
