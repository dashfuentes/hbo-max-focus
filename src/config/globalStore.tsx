import create from "zustand";

const useStore = create((set) => ({
	token: { token: "" },

	addToken: (key: any) =>
		set((state: any) => ({
			token: { ...state.token, token: key.token },
			
		})),

		removeToken: () =>
		set((state: any) => ({
			token: {  ...state.token, token: "" },
			
		})),

	
}));
export default useStore;
