import create from "zustand";

/**
 * Create a global store in the application in order to be aware of importants mutable events
 * token -> add/remove token info
 * favoritesMovies -> add/remove favorites movie
 *

 */
const useStore = create((set) => ({
	token: { token: "" },

	addToken: (key: any) =>
		set((state: any) => ({
			token: { ...state.token, token: key.token },
		})),

	removeToken: () =>
		set((state: any) => ({
			token: { ...state.token, token: "" },
		})),

	favoriteMovies: [],
	addMovies: (movie: any) =>
		set((state: any) => ({
			favoriteMovies: [
				{
					id: movie.id,
					title: movie.title,
					poster_path: movie.poster_path,
					release_date: movie.release_date,
					popularity: movie.popularity,
					overview: movie.overview,
				},
				...state.favoriteMovies,
			],
		})),
}));
export default useStore;
