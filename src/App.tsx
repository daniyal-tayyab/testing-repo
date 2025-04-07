import React from "react";
// main style
import "./App.css";

// lib
import { FloatingWhatsApp } from "react-floating-whatsapp";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//custom
import {
	Home,
	Projects,
	About,
	Help,
	Invest,
	WhitePaperPage,
	FAQ,
	Terms,
	Privacy,
	Agreement,
	Presentation,
	Error,
} from "./pages";
import {
	Register,
	Login,
	Verify,
	ForgetPassword,
	ResetPassword,
} from "./pages/Auth";
import { Dashboard, DeleteAccount } from "./pages/Client";
import { Navbar, Sidebar, Footer } from "./components/Home";
import { useAuthContext } from "./contexts/auth_context";

function App() {
	const { user } = useAuthContext();

	return (
		<Router>
			<ToastContainer />
			<Navbar />
			<Sidebar />
			<Routes>
				{/* base pages */}
				<Route path="/" element={<Home />}>
					{" "}
				</Route>
				<Route path="/about" element={<About />}>
					{" "}
				</Route>
				<Route path="/projects" element={<Projects />}>
					{" "}
				</Route>
				<Route path="/help" element={<Help />}>
					{" "}
				</Route>

				{/* auth */}
				<Route
					path="/register"
					element={
						!user.isLoggedin ? (
							<Register />
						) : (
							<Navigate to="/user/dashboard"></Navigate>
						)
					}
				>
					{" "}
				</Route>
				<Route
					path="/login"
					element={
						!user.isLoggedin ? (
							<Login />
						) : (
							<Navigate to="/user/dashboard"></Navigate>
						)
					}
				>
					{" "}
				</Route>
				<Route
					path="/verify"
					element={
						!user.isLoggedin ? (
							<Verify />
						) : (
							<Navigate to="/user/dashboard"></Navigate>
						)
					}
				>
					{" "}
				</Route>
				<Route path="/forget-password" element={<ForgetPassword />}>
					{" "}
				</Route>
				<Route path="/reset-password" element={<ResetPassword />}>
					{" "}
				</Route>

				{/* invest */}
				<Route path="/invest" element={<Invest />}>
					{" "}
				</Route>

				{/* WhitePaperPage */}
				<Route path="/whitepaper" element={<WhitePaperPage />}>
					{" "}
				</Route>

				{/* FAQs */}
				<Route path="/faq" element={<FAQ />}>
					{" "}
				</Route>

				{/* Terms */}
				<Route path="/terms" element={<Terms />}>
					{" "}
				</Route>

				{/* Privacy */}
				<Route path="/privacy" element={<Privacy />}>
					{" "}
				</Route>
				{/* Agreement */}
				<Route path="/agreement" element={<Agreement />}>
					{" "}
				</Route>

				{/* profile */}
				<Route
					path="/user/dashboard"
					element={
						user.isLoggedin ? <Dashboard /> : <Navigate to="/login"></Navigate>
					}
				>
					{" "}
				</Route>
				<Route
					path="/user/team"
					element={
						user.isLoggedin ? <Dashboard /> : <Navigate to="/login"></Navigate>
					}
				>
					{" "}
				</Route>

				{/* <Route
					path="/user/profile"
					element={
						user.isLoggedin ? (
							<DeleteAccount />
						) : (
							<Navigate to="/login"></Navigate>
						)
					}
				>
					{" "}
				</Route> */}

				{/* testing */}
				{/* <Route path="/presentaion" element={<Presentation />}>
					{" "}
				</Route> */}

				{/* error - unkown pages */}
				<Route path="/*" element={<Error />}>
					{" "}
				</Route>
			</Routes>
			{/* <FloatingWhatsApp
				phoneNumber="+33644650049"
				accountName="Innovation Chain Coin Support"
				chatMessage="Hello! Welcome to Innovation Chain Coin. Please let us know how we can assist you today."
				style={{ color: "black" }}
			/> */}
			<Footer />
		</Router>
	);
}

export default App;
