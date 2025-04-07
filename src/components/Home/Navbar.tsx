//base
import React from "react";

// libs
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// custom
import logo from "../../assets/logo-nav.png";
import { navbarList } from "../../utils/constants";
import { useMainContext } from "../../contexts/main_context";
import { handleDownload } from "../../utils/helpers";
import { useAuthContext } from "../../contexts/auth_context";

function Navbar() {
	const { openSidebar, setAddress } = useMainContext();
	const { user } = useAuthContext();
	let location = useLocation();
	const navigate = useNavigate();

	const handleconnect = async () => {
		//setAddress();
		navigate("/invest");
	};

	return (
		<nav className="flex h-20 items-center justify-center py-3">
			<div
				id="nav-center"
				className="mx-auto my-0 lg:max-w-max-custom max-w-max-width w-90vw"
			>
				<div id="nav-header" className="flex items-center justify-between">
					<Link to="/" className="flex items-center justify-center space-x-2">
						<img
							className="-ml-4 sm:w-16 w-12 sm:h-16 h-12"
							src={logo}
							alt="Trust Chain"
						/>
						<span className="text-clr-main-bright text-xl font-Ubuntu font-normal">
							Trust Chain
						</span>
					</Link>
					<div className="hidden md:flex flex-row lg:space-x-8 space-x-4 items-center justify-center">
						<ul
							id="nav-links"
							className="hidden md:flex md:justify-center lg:space-x-3  space-x-3"
						>
							<li className="md:my-0 text-3xl font-bold">
								<Link
									className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
									to={"/"}
								>
									<span className="pb-1">{"Home"}</span>
									{location.pathname === "/" && (
										<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
											<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
											<span className="-mt-2 text-clr-main-bright">.</span>
										</span>
									)}
								</Link>
							</li>
							<li className="md:my-0 text-3xl font-bold">
								<Link
									className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
									to={"/about"}
								>
									<span className="pb-1">{"About"}</span>
									{location.pathname === "/about" && (
										<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
											<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
											<span className="-mt-2 text-clr-main-bright">.</span>
										</span>
									)}
								</Link>
							</li>
							<li className="md:my-0 text-3xl font-bold">
								<Link
									className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
									to={"/projects"}
								>
									<span className="pb-1">{"Projects"}</span>
									{location.pathname === "/projects" && (
										<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
											<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
											<span className="-mt-2 text-clr-main-bright">.</span>
										</span>
									)}
								</Link>
							</li>
							{!user.isLoggedin ? (
								<li className="md:my-0 text-3xl font-bold">
									<Link
										className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
										to={"/register"}
									>
										<span className="pb-1">{"Sign up/Login"}</span>
										{(location.pathname === "/register" ||
											location.pathname === "/login") && (
											<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
												<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
												<span className="-mt-2 text-clr-main-bright">.</span>
											</span>
										)}
									</Link>
									{/* <li className="md:my-0 text-3xl font-bold">
										<Link
											className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
											to={"/register"}
										>
											<span className="pb-1">{"Sign Up"}</span>
											{location.pathname === "/register" && (
												<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
													<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
													<span className="-mt-2 text-clr-main-bright">.</span>
												</span>
											)}
										</Link>
									</li>
									<li className="md:my-0 text-3xl font-bold">
										<Link
											className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
											to={"/login"}
										>
											<span className="pb-1">{"Login"}</span>
											{location.pathname === "/login" && (
												<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
													<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
													<span className="-mt-2 text-clr-main-bright">.</span>
												</span>
											)}
										</Link>
									</li> */}
								</li>
							) : (
								<Link
									className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
									to={"/user/dashboard"}
								>
									<span className="pb-1">{user.user.name}</span>
									{location.pathname === "/user/dashboard" && (
										<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
											<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
											<span className="-mt-2 text-clr-main-bright">.</span>
										</span>
									)}
								</Link>
							)}
							{/* <li className="md:my-0 text-3xl font-bold">
								<Link
									className="flex flex-col text-clr-off-white capitalize text-base tracking-widest p-2"
									to={"/help"}
								>
									<span className="pb-1">{"Help"}</span>
									{location.pathname === "/help" && (
										<span className="flex flex-row items-center space-x-1 absolute top-14 w-16">
											<hr className="text-clr-main-bright bg-clr-main-bright border-clr-main-bright border rounded w-1/2" />
											<span className="-mt-2 text-clr-main-bright">.</span>
										</span>
									)}
								</Link>
							</li> */}
						</ul>
						<button
							className="bg-clr-main-bright text-clr-main-dark text-lg font-semibold px-5 py-1 rounded capitalize"
							onClick={handleconnect}
						>
							invest
						</button>
					</div>
					<button
						type="button"
						onClick={openSidebar}
						id="nav-toggle"
						className="bg-transparent border-transparent text-clr-main-bright cursor-pointer md:hidden"
					>
						<FaBars className="text-3xl" />
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
