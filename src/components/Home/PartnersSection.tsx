import React from "react";

// custom
import bgPartner from "../../assets/bg-partner.png";
import { partners } from "../../utils/constants";

function PartnersSection() {
	return (
		<div
			id="borderDiv"
			className="h-auto py-40 mb-10 relative flex items-center justify-center "
		>
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-20 lg:-top-20 -top-20 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<img
				className="absolute -z-250 top-[50px] left-0 w-full h-[450px] opacity-50"
				src={bgPartner}
				alt="Trust Chain"
			/>
			<div className="bg-clr-secondary-bright py-4 w-full">
				<div className="mx-auto my-0 lg:max-w-max-custom max-w-max-width w-90vw grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 py-6">
					{partners.map((item : any) => {
						return (
							<p
								className="flex flex-row items-center justify-center space-x-1"
								key={item.id}
							>
								<span>{item.icon}</span>
								<span className="lg:text-3xl md:text-2xl text-2xl font-medium">
									{item.text}
								</span>
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default PartnersSection;
