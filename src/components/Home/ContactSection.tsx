import React from "react";

//lib
import { AiOutlineRight } from "react-icons/ai";

//custom
import bg_contact from "../../assets/bg_contact.svg";

function ContactSection() {
	return (
		<div className="lg:h-screen h-auto  relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto lg:my-0 my-20 lg:max-w-max-custom max-w-max-width w-90vw">
				<div className="w-full flex md:flex-row flex-col md:space-y-0 space-y-8 items-center space-x-1">
					<div className=" lg:flex hidden md:items-center md:justify-center relative w-1/2">
						<img
							className="animate-move-round"
							src={bg_contact}
							alt="Trust Chain Coin"
						/>
					</div>
					<div className="flex flex-col lg:items-start items-center lg:justify-start justify-center space-y-4 relative lg:w-1/2 w-full">
						<h3 className="S-xl:text-7xl text-6xl font-bold lg:ml-40 ml-0">
							Contact
						</h3>
						{/* <p className="S-xl:text-xl text-lg font-normal w-4/5 md:pt-4 lg:ml-40 ml-0">
							Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos.
						</p> */}
						<div className="flex flex-col space-y-10 lg:pt-5 pt-10 lg:ml-40 ml-0 relative w-4/5">
							{/* input */}
							<div className="flex flex-col border border-clr-secondary-bright rounded w-full relative py-2">
								<label
									htmlFor="fullName"
									className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
								>
									Full Name
								</label>
								<input
									type="text"
									id="fullName"
									name="fullName"
									className="bg-transparent py-3 px-6 outline-none placeholder:text-[#585858] placeholder:text-lg placeholder:font-semibold"
									placeholder="Your Full Name"
								/>
							</div>
							{/* input */}
							<div className="flex flex-col border border-clr-secondary-bright rounded w-full relative py-2">
								<label
									htmlFor="email"
									className="font-bold text-xl absolute -top-4 left-5 bg-clr-background px-3 rounded"
								>
									Email
								</label>
								<input
									type="text"
									id="email"
									name="email"
									className="bg-transparent py-3 px-6 outline-none placeholder:text-[#585858] placeholder:text-lg placeholder:font-semibold"
									placeholder="Your Email"
								/>
							</div>
							{/* input */}
							<div className="flex flex-col border border-clr-secondary-bright rounded w-full relative py-2">
								<label
									htmlFor="phone"
									className="font-bold text-xl absolute -top-4 left-5 bg-clr-background px-3 rounded"
								>
									Phone Number
								</label>
								<input
									type="text"
									id="phone"
									name="phone"
									className="bg-transparent py-3 px-6 outline-none placeholder:text-[#585858] placeholder:text-lg placeholder:font-semibold"
									placeholder="Your Phone Number"
								/>
							</div>
							<div className="flex flex-row items-center space-x-4 ">
								<button className="relative shadow-btn_shadow backdrop-blur-xl bg-clr-main-bright md:px-8 px-4 S-xl:py-3 lg:py-3 md:py-3 py-2 rounded ">
									<span className="flex flex-row text-clr-main-dark tracking-wider font-medium lg:text-lg md:text-base text-sm">
										Submit
										<AiOutlineRight className="text-5xl font-bold w-5 h-5 mt-1 ml-3" />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* bolb */}
			<div
				id="bolb"
				className="absolute  w-[350px] h-[300px] S-xl:-bottom-[50px] md:-bottom-[100px]  S-xl:left-[150px] md:left-[0px] rounded-full"
			></div>
			{/* end bolb */}
		</div>
	);
}

export default ContactSection;
