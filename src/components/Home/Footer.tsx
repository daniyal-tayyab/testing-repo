// base
import React from "react";

// libs
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

// custom
import { footerLinks, socialList } from "../../utils/constants";
import logo from "../../assets/logo-nav.png";

function Footer() {
	return (
		<div className="border-t  border-clr-main-bright py-10 mt-32 relative">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto my-0 lg:max-w-max-custom max-w-max-width w-90vw ">
				{/* links */}
				<div className="grid grid-cols-12 lg:gap-x-4 md:gap-x-2 gap-x-0 lg:gap-y-0 md:gap-y-0 gap-y-6">
					<div className="lg:col-span-4 md:col-span-4 col-span-12 flex flex-col space-y-6 md:items-start items-center md:justify-start justify-center ">
						<Link to="/" className="flex items-center justify-center space-x-2">
							<img
								className="sm:w-14 w-12 sm:h-14 h-12"
								src={logo}
								alt="Trust Chain"
							/>
							<span className="text-clr-main-bright text-xl font-Ubuntu font-normal">
								Trust Chain
							</span>
						</Link>
						<p className="col-span-5 text-clr-off-white text-base lg:w-4/5 md:w-4/5 w-10/12 text-start">
							Unlock the future of digital investment with Trust Chain Coin. Join the
							revolution and invest in the next generation of cryptocurrency
							today.
						</p>
						<ul className="flex flex-row space-x-4 ">
							{socialList.map((item: any) => {
								return (
									<li
										id="socialLinkDiv"
										key={item.id}
										className="flex items-center justify-center relative rounded-full"
										// className="text-clr-main-bright p-3 rounded-full  drop-shadow-social_shadow backdrop-opacity-5  cursor-pointer hover:text-clr-main-dark hover:bg-clr-main-bright transition-all ease-in-out duration-700"
									>
										<Link
											to={item.href}
											id="socialLink"
											className="w-full h-full bg-transparent hover:text-clr-main-dark hover:bg-clr-main-bright p-3 rounded-full transition-all ease-in-out duration-300 delay-150"
										>
											{item.icon}
										</Link>
									</li>
								);
							})}
						</ul>
						{/* <button className="capitalize bg-clr-main-bright text-clr-main-dark text-lg font-semibold py-1 px-6 rounded flex items-center justify-center space-x-12">
							invest now
							<AiOutlineRight className="text-5xl font-bold w-5 h-5 mt-1 ml-3" />
						</button> */}
					</div>
					<div className="lg:col-span-8 md:col-span-7 col-span-12 mt-3 ">
						<div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-y-0 gap-y-8 ">
							{footerLinks.map((linkItem: any) => {
								return (
									<div
										key={linkItem.id}
										className="flex flex-col items-start sm:ml-20 ml-12"
									>
										<h3 className="text-2xl font-semibold mb-5">
											{linkItem.name}
										</h3>
										<ul className="flex flex-col space-y-[2px]">
											{linkItem.options.map((colItem: any) => {
												return (
													<li
														key={colItem.id}
														className="text-sm font-normal pb-1 hover:underline "
													>
														<Link to={colItem.href}>{colItem.text}</Link>
													</li>
												);
											})}
										</ul>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				{/* rights & social */}
				<div className="grid grid-cols-12 lg:gap-x-4 md:gap-x-2 gap-x-0 lg:gap-y-0 md:gap-y-0 gap-y-6 mt-10">
					<div className="lg:col-span-4 md:col-span-4 col-span-12 flex flex-row space-x-2 items-center text-clr-off-white text-sm sm:order-1 order-2">
						<span>
							<FaRegCopyright />
						</span>
						<span>{new Date()?.getFullYear()} Trust Chain</span>
					</div>
					<div className="lg:col-span-8 md:col-span-7 col-span-12 flex sm:flex-row flex-col sm:space-y-0 space-y-5 items-start justify-between sm:w-[90%] sm:mx-auto sm:order-2 order-1">
						<p style={{opacity: '0'}} className="w-3/5 px-3 sm:py-0 border-l-2 border-clr-secondary-bright	">
							Office 2503, Regal Tower, Business Bay, Dubai, UAE
						</p>
						<p className="w-3/5 px-3 border-l-2 border-clr-secondary-bright">
							Office 4308, Marina 101, Dubai Marina, Dubai, UAE
						</p>
					</div>
					{/* <ul className="flex flex-row space-x-4 ">
						{socialList.map((item: any) => {
							return (
								<li
									id="socialLinkDiv"
									key={item.id}
									className="flex items-center justify-center relative rounded-full"
									// className="text-clr-main-bright p-3 rounded-full  drop-shadow-social_shadow backdrop-opacity-5  cursor-pointer hover:text-clr-main-dark hover:bg-clr-main-bright transition-all ease-in-out duration-700"
								>
									<Link
										to={item.href}
										id="socialLink"
										className="w-full h-full bg-transparent hover:text-clr-main-dark hover:bg-clr-main-bright p-3 rounded-full transition-all ease-in-out duration-300 delay-150"
									>
										{item.icon}
									</Link>
								</li>
							);
						})}
					</ul> */}
				</div>
			</div>
		</div>
	);
}

export default Footer;
