import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

function WhitePaperPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	// useEffect(() => {
	// 	ReactGA.pageview(window.location.pathname);
	// }, []);

	return (
		<div className="h-auto relative top-16 flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			<div className="mx-auto lg:max-w-max-custom max-w-max-width w-90vw">
				<div className="w-full flex  flex-col  items-center ">
					<embed
						src="/docs/Innovation_Chain_Whitepaper.pdf"
						type="application/pdf"
						className="relative "
						width="100%"
						height="1200px"
					/>
				</div>
			</div>
		</div>
	);
}

export default WhitePaperPage;
