import React from "react";
import Aside from "../../components/Client/Aside";

function DeleteAccount() {
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
					<Aside />
				</div>
			</div>
		</div>
	);
}

export default DeleteAccount;
