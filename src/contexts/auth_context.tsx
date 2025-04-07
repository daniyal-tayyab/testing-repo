import React, { useContext, useState } from "react";

// libs
import Cookies from "js-cookie";
import { axios, axios_auth } from "../utils/axios";
import { toast } from "react-toastify";

// custom
import { getLocalStorage } from "../utils/helpers";

const initialContext = {
	user: getLocalStorage("auth"),
	register: (() => {}) as any,
	login: (() => {}) as any,
	verify: (() => {}) as any,
	logout: (() => {}) as any,
	forgetPassword: (() => {}) as any,
	resetPassword: (() => {}) as any,
};

const AuthContext = React.createContext(initialContext);
export const AuthProvider = ({ children }: any) => {
	const [user, setUser]: any = useState(getLocalStorage("auth"));

	const register = async ({
		setStatus,
		setErrors,
		setLoading,
		...props
	}: any) => {
		setErrors(null);

		axios
			.post("/register", props)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
					const currentAuth = {
						user: res.data.data.user,
						isLoggedin: false,
					};
					setUser(currentAuth);
					localStorage.setItem("auth", JSON.stringify(currentAuth));
					setStatus(true);
				} else {
					setErrors(res.data.message);
					//console.log("error", res.data.message);
					setStatus(false);
				}
				setLoading(false);
			})
			.catch((error) => {
				//console.log("error", error);
				setLoading(false);
				setStatus(false);
				setErrors(error.response?.data.error);
			});
	};

	const login = async ({ setErrors, setLoading, setstatus, ...props }: any) => {
		setErrors(null);

		axios
			.post("/login", props)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
					const currentAuth = {
						user: res.data.data.user,
						isLoggedin: false,
					};
					setUser(currentAuth);
					localStorage.setItem("auth", JSON.stringify(currentAuth));
					setstatus(true);
				} else {
					setErrors(res.data.message);
					setstatus(false);
				}
				setLoading(false);
			})
			.catch((error) => {
				//console.log("error", error);
				setLoading(false);
				setstatus(false);
				setErrors(error.response?.data.error);
			});
	};

	const verify = async ({
		setErrors,
		setLoading,
		setStatus,
		...props
	}: any) => {
		setErrors(null);

		axios
			.post("/otp/validate", props)
			.then((res) => {
				if (res.data.status === true) {
					const token = res.data.data.token;
					const currentAuth = {
						user: res.data.data.user,
						isLoggedin: true,
					};
					setUser(currentAuth);
					localStorage.setItem("auth", JSON.stringify(currentAuth));
					Cookies.set("token", token, {
						expires: 7,
						path: "/",
					});
					setStatus(true);
				} else {
					setErrors(res.data.message);
					setStatus(false);
				}
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				setStatus(false);
				setErrors(error.response?.data.error);
			});
	};

	const logout = async () => {
		await axios_auth(Cookies.get("token"))
			.post("/logout")
			.then((res) => {
				if (res.data.status === true) {
					setUser({ email: "", isLoggedin: false, token: "" });
					// localStorage.removeItem("auth");
					// Cookies.remove("token");
					// window.location.pathname = "/login";
				} else {
					toast.error("An error occurred while logging out.", {
						position: "top-left",
					});
				}
				localStorage.removeItem("auth");
				Cookies.remove("token");
				window.location.pathname = "/login";
			})
			.catch((error) => {
				toast.error("An error occurred while logging out.", {
					position: "top-left",
				});
				localStorage.removeItem("auth");
				Cookies.remove("token");
				window.location.pathname = "/login";
			});
	};

	const forgetPassword = ({
		setErrors,
		setLoading,
		setstatus,
		...props
	}: any) => {
		setErrors(null);

		axios
			.post("/forgot-password", props)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
					setstatus(true);
				} else {
					setErrors(res.data.message);
					setstatus(false);
				}
				setLoading(false);
			})
			.catch((error) => {
				//console.log("error", error);
				setLoading(false);
				setstatus(false);
				setErrors(error.response?.data.error);
			});
	};

	const resetPassword = ({
		setStatus,
		setErrors,
		setLoading,
		...props
	}: any) => {
		setErrors(null);

		axios
			.post("/reset-password", props)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
					setStatus(true);
				} else {
					setErrors(res.data.message);
					//console.log("error", res.data.message);
					setStatus(false);
				}
				setLoading(false);
			})
			.catch((error) => {
				//console.log("error", error);
				setLoading(false);
				setStatus(false);
				setErrors(error.response?.data.error);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				register,
				login,
				verify,
				logout,
				forgetPassword,
				resetPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
// make sure use
export const useAuthContext = () => {
	return useContext(AuthContext);
};
