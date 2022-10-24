import React, { FC, useState } from "react";
import useStore from "../../../config/globalStore";
interface Props {}

const Logout: FC<Props> = (props) => {
    const getToken = useStore((state: any) => state.token);
    const removeTokenFromStore = useStore((state) => state.removeToken);

    const deleteToken = () => {
        console.log('removing')
        return removeTokenFromStore()
    }
	
	return (
		<button type="button" onClick={ () => {return deleteToken()}} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
	);
};

export default Logout;
