import React, { useEffect, useState } from "react";

// libs
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// custom
import { axios, axios_auth } from "../../utils/axios";
import { useAuthContext } from "../../contexts/auth_context";
import { classNames } from "../../utils/helpers";

function DashboardPage() {
	const { logout, user } = useAuthContext();
	let location = useLocation();
	const [myTeam, setMyteam] = useState([]);
	const [totalTeam, setTotalTeam] = useState(0);
	const [TabsToggle, setTabsToggle] = useState(0);
	const [currentLevel, setCurrentLevel] = useState([]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	const getTeam = async () => {
		await axios_auth(Cookies.get("token"))
			.get("/team/level-tree")
			.then((res) => {
				//console.log("team", res.data);
				if (res.data.status) {
					setMyteam(res.data.data);
					let total = 0;
					const totalScores = res.data.data.reduce(
						(next: any, item: any) => {
							const len = item.length;
							return (total += parseInt(len));
						},
						{ total: 0 }
					);
					setTotalTeam(totalScores);
					setCurrentLevel(res.data.data[0]);
				}
			})
			.catch((error) => {
				toast.error("An error occurred while fetch data.", {
					position: "top-left",
				});
			});
	};

	useEffect(() => {
		getTeam();
	}, []);

	const handleToggle = (ind: any) => {
		setTabsToggle(ind);
		setCurrentLevel(myTeam[ind]);
	};

	//console.log("status", myTeam, totalTeam);

	return (
		<div className="my-10 h-auto  relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto lg:my-0 my-20 lg:max-w-max-custom max-w-max-width w-90vw">
				<div className="grid grid-cols-12 gap-5">
					{/* aside */}
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
							<li className="py-2 sm:border-b border-clr-secondary-bright last:border-none pl-2 hover:text-clr-main-bright ">
								<button className="" onClick={logout}>
									Logout
								</button>
							</li>
						</ul>
					</div>
					{/* content */}
					<div className="sm:col-span-9 col-span-12">
						<div className="flex flex-col space-y-6">
							<div className="py-4 border-b border-clr-main-bright flex lg:flex-row lg:space-y-0 flex-col space-y-1 lg:items-center items-start justify-between">
								<p>
									<span>Name: </span> <span>{user.user.name}</span>
								</p>
								<p>
									<span>Email: </span> <span>{user.user.email}</span>
								</p>
								<p>
									<span>Referral code: </span>{" "}
									<span>{user.user.referral_code}</span>
								</p>
							</div>
							<ul
								id="levelsTab"
								className={
									"flex flex-row space-x-5 items-center overflow-x-auto relative w-full min-w-[90%]"
								}
							>
								{myTeam.length > 0 &&
									myTeam.map((item, index) => {
										return (
											<li
												key={index}
												onClick={() => handleToggle(index)}
												id={index + ""}
												className={classNames(
													"w-40 text-lg cursor-pointer",
													TabsToggle == index
														? "text-clr-main-bright"
														: "text-clr-off-white"
												)}
											>{`Level ${index + 1}`}</li>
										);
									})}
							</ul>
							<div className="overflow-hidden border rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-clr-secondary-bright">
										<tr className="rounded-t-xl">
											<th className="py-2 px-4 "></th>
											<th className="py-2 px-4 ">Team Lead</th>
											<th>Member Name</th>
											<th>Date</th>
										</tr>
									</thead>
									<tbody className="">
										{myTeam.length > 0 &&
											currentLevel.map((item: any, index) => {
												return (
													<tr
														key={index}
														className={
															"cursor-pointer hover:bg-clr-gray-light "
														}
													>
														<td className="py-2 px-1  text-center text-clr-gray-dark font-medium "></td>
														<td className="py-2 px-1  text-center text-clr-gray-dark font-medium border border-clr-gray-normal ">
															{item.direct_parent_name}
														</td>
														<td className="py-2 px-1  text-center text-clr-gray-dark font-medium border border-clr-gray-normal ">
															{item.child_name}
														</td>
														<td className="py-2 px-1  text-center text-clr-gray-dark font-medium border border-clr-gray-normal ">
															{item.created_at}
														</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardPage;
