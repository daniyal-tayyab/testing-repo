import React from "react";

// libs
import { Link, useLocation, useNavigate } from "react-router-dom";

// custom
import { classNames } from "../../utils/helpers";
import { useAuthContext } from "../../contexts/auth_context";

function Aside() {
	const { logout, user } = useAuthContext();
	let location = useLocation();
	return (
		<div className="sm:col-span-3 col-span-12 sm:py-6 py-1 px-4 border border-clr-secondary-bright rounded-lg sm:h-[300px] h-[50px]">
			<ul className="flex sm:flex-col flex-row sm:space-x-0 space-x-5">
				<li
					className={classNames(
						"py-2 sm:border-b border-clr-secondary-bright pl-2 hover:text-clr-main-bright",
						location.pathname == "/user/dashboard"
							? "text-clr-main-bright"
							: "text-clr-off-white"
					)}
				>
					<Link className="" to={"/user/dashboard"}>
						Dashboard
					</Link>
				</li>
				<li
					className={classNames(
						"py-2 sm:border-b border-clr-secondary-bright pl-2 hover:text-clr-main-bright",
						location.pathname == "/user/team"
							? "text-clr-main-bright"
							: "text-clr-off-white"
					)}
				>
					<Link className="" to={"/user/team"}>
						My Team
					</Link>
				</li>

				<li
					className={classNames(
						"py-2 sm:border-b border-clr-secondary-bright pl-2 hover:text-clr-main-bright",
						location.pathname == "/user/profile"
							? "text-clr-main-bright"
							: "text-clr-off-white"
					)}
				>
					<Link className="" to={"/user/profile"}>
						Profile
					</Link>
				</li>

				<li className="py-2 sm:border-b border-clr-secondary-bright last:border-none pl-2 hover:text-clr-main-bright ">
					<button className="" onClick={logout}>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Aside;
