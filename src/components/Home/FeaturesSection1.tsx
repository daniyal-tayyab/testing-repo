import React from "react";

//lib
import { AiOutlineRight } from "react-icons/ai";

//custom
import coin_branchs from "../../assets/coin_branchs.svg";
import { features } from "../../utils/constants";

function FeaturesSection1() {
	return (
		<div className="lg:h-screen h-auto relative flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto lg:my-0 mt-10 mb-32 lg:max-w-max-custom max-w-max-width w-90vw">
				<div className="w-full flex lg:flex-row flex-col lg:space-y-0 space-y-20 items-center justify-center space-x-1">
					<div className="flex flex-col lg:items-start items-center lg:space-y-16 space-y-10 relative ">
						<h1 className="S-xl:text-9xl lg:text-7xl md:text-6xl sm:text-5xl font-bold S-xl:ml-40 lg:ml-14">
							Our Features
						</h1>
						<p className="S-xl:text-2xl lg:text-lg text-base font-normal w-4/5 md:pt-4 S-xl:ml-40 lg:ml-14">
							Innovation Chain is a multi-utility cryptocurrency, offering a range of
							features that prioritize security, privacy, and user experience.
							here are some key aspects of Innovation Chain.
						</p>
						<div className="flex flex-row items-center space-x-4 S-xl:ml-40 lg:ml-14">
							<button
								id="borderTest"
								className="relative lg:mt-5 mt-1  shadow-btn_shadow backdrop-blur-xl bg-clr-bg-btn-1 md:px-8 px-4 S-xl:py-3 lg:py-3 md:py-3 py-2 rounded-lg "
							>
								<span className="flex flex-row text-clr-main-bright tracking-wider lg:text-lg md:text-base text-sm">
									Invest
									<AiOutlineRight className="text-5xl font-bold w-5 h-5 mt-1 ml-3" />
								</span>
							</button>
						</div>
					</div>
					<div className="w-full flex items-center justify-center relative lg:my-0 my-0">
						<img
							className="S-xl:w-4/6 lg:w-3/6 md:w-[300px] lg:flex hidden absolute S-xl:left-16 lg:left-10 md:left-40 left-0"
							src={coin_branchs}
							alt="Innovation Chain Coin"
						/>
						<div className="flex lg:flex-col sm:flex-row flex-col S-xl:space-y-16 lg:space-y-10 sm:space-x-10 space-y-5 items-center justify-center relative">
							{features.map((item : any) => {
								return (
									<div
										className="flex flex-row items-center justify-start text-start space-x-5 relative S-xl:left-56 lg:left-28 left-0"
										key={item.id}
									>
										<span className="text-clr-main-bright">{item.icon}</span>
										<span>{item.title}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* bolb */}
			<div
				id="bolb"
				className="absolute  w-[350px] h-[300px] S-xl:-bottom-[50px] md:-bottom-[0px]  S-xl:left-[150px] md:left-[0px] rounded-full"
			></div>
			{/* end bolb */}
		</div>
	);
}

export default FeaturesSection1;
