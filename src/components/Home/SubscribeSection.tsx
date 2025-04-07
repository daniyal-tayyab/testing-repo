import React, { useState } from "react";

//lib
import { MdEmail } from "react-icons/md";
import { axios } from "../../utils/axios";
import { toast } from "react-toastify";
import { RiMailSendFill } from "react-icons/ri";

function SubscribeSection() {
	const [email, setEmail] = useState("");

	const handleEmail = (e: any) => {
		const value = e.currentTarget.value;
		setEmail(value);
		//console.log("test", value, email);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log("test form");
		const data = {
			email: email,
			phone: "",
			name: "",
			type: "broadcast",
		};
		axios
			.post("/contact-us", data)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
					toast.success("your email is saved", {
						position: "top-left",
					});
				} else {
					toast.warning("your email is not saved,check again", {
						position: "top-left",
					});
				}
			})
			.catch((error) => {
				toast.warning("your email is not saved,check again", {
					position: "top-left",
				});
			});
	};

	return (
		<div className="h-auto relative flex items-center justify-center">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			{/* content */}
			<div className="mx-auto mt-28 max-w-max-width w-90vw flex flex-col items-center justify-center space-y-10">
				<div className="flex md:flex-row flex-col md:space-y-0 space-y-10 items-center justify-between w-full bg-clr-secondary-bright py-16 sm:px-14 px-8 rounded-lg">
					<div className="flex flex-col items-start justify-center">
						<h1 className="text-3xl font-bold">Join our Newsletter</h1>
						<p className="text-lg font-normal w-4/5 text-clr-off-white">
							Subscribe to our newsletter and be the first to receive exclusive
							updates about Innovation Chain Coin.
						</p>
					</div>
					<form className="md:w-1/2 w-full" onSubmit={handleSubmit}>
						{/* input */}
						<div className="flex flex-col border border-clr-off-white rounded w-full relative py-2">
							<label
								htmlFor="email"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-secondary-bright px-3 rounded"
							>
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								value={email}
								onChange={handleEmail}
								className="bg-transparent py-3 px-6 outline-none placeholder:text-clr-off-white placeholder:text-lg placeholder:font-semibold"
								placeholder="Your Email"
								autoComplete="off"
							/>
							<button className="group">
								<RiMailSendFill className="absolute w-10 h-10 right-4 top-3 border rounded-full p-2 group-hover:text-clr-main-bright group-hover:border-clr-main-bright" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SubscribeSection;
