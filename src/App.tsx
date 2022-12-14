import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/screens/Login/index";
import Home from "./components/screens/Home";
import NotFound from "./components/screens/NotFound";
import SearchPage from "./components/screens/SearchPage";
import MovieDetail from "./components/screens/Details";
import Favorite from "./components/screens/Favorites";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {

	const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: 1,
        staleTime: 5 * 1000,
      },
    },
	});

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route  path="/" element={<Login />} />
					<Route  path="/home" element={<Home />} />
					<Route  path="/search-movies" element={<SearchPage />} />
					<Route  path="/movie-details" element={<MovieDetail />} />
					<Route  path="/favorite-movie" element={<Favorite />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
