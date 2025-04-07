// import axios from 'axios'
import React, { useContext, useEffect, useReducer } from "react";

// libs
import Web3 from "web3";
import { toast } from "react-toastify";

// custom
import reducer from "../reducers/main_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_ADDRESS } from "../utils/actions";

const initialContext = {
	isSidebarOpen: false,
	openSidebar: (() => {}) as any,
	closeSidebar: (() => {}) as any,
	address: "",
	setAddress: (() => {}) as any,
};

const initialState = {};

const MainContext = React.createContext(initialContext);

export const MainProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(reducer, initialContext);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};

	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const setAddress = (account: any) => {
		try {
			dispatch({ type: SET_ADDRESS, payload: account });
			// if (/Mobi|Android/i.test(navigator.userAgent)) {
			// 	// Mobile browser
			// 	//console.log("Accessed from a mobile browser");
			// 	toast.warning(
			// 		"Please open website from metamask app on mobile,or please open it on a computer",
			// 		{
			// 			position: "top-left",
			// 		}
			// 	);
			// } else {
			// 	// Desktop browser
			// 	//console.log("Accessed from a desktop browser");
			// 	const web3 = new Web3(window.ethereum);
			// 	const accounts = await web3.eth.requestAccounts();
			// 	const account = accounts[0];

			// 	dispatch({ type: SET_ADDRESS, payload: account });

			// 	toast.success(`Successfully connected to ${account}!`, {
			// 		position: "top-left",
			// 	});
			// }
		} catch (error) {
			console.error(error);
			toast.error("An error occurred while connecting.", {
				position: "top-left",
			});
		}
	};

	return (
		<MainContext.Provider
			value={{ ...state, openSidebar, closeSidebar, setAddress }}
		>
			{children}
		</MainContext.Provider>
	);
};
// make sure use
export const useMainContext = () => {
	return useContext(MainContext);
};
