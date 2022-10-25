import React, { FC, useState } from "react";
import useStore from "../../../config/globalStore";
interface Props {}

const Logout: FC<Props> = (props) => {
    const getToken = useStore((state: any) => state.token);
    const removeTokenFromStore = useStore((state: any) => state.removeToken);

    const deleteToken = () => {
        console.log('removing')
        
        localStorage.removeItem('token');
        //remove the favorites from LS


        return removeTokenFromStore()
    }
	
    return (
       
            <button type="button" onClick={() => { return deleteToken() }} className="text-white  right-2.5 bottom-2.5 bg-red-700 hover:bg-red-799 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
           
	);
};

export default Logout;
