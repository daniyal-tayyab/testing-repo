import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

// custom
import { InvestForm } from "../components/Invest";

function InvestPage() {
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
		<section className="flex-col space-y-10 relative items-center justify-center overflow-hidden">
			{/* bolb */}
			<div
				id="bolb1"
				className="absolute sm:w-[350px] w-[200px] sm:h-[200px] h-[150px] S-xl:top-[150px] md:top-[150px]  S-xl:right-0 md:right-0 right-36 rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto max-w-max-width w-90vw S-xl:py-20 md:py-10 py-8">
				{/* hero */}
				<div className="flex flex-col items-center justify-center S-xl:space-y-5 md:space-y-3 space-y-2 h-auto S-xl:py-10 md:py-0 py-5">
					<h1 className="S-xl:text-8xl lg:text-7xl md:text-6xl text-6xl font-bold text-center capitalize S-xl:mb-7 mb-7">
						invest with us
					</h1>
					<h2 className="S-xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-center capitalize S-xl:mb-4 mb-4 text-clr-main-bright">
						Purchase your Innovation Chain here
					</h2>
					<p className="S-xl:text-xl lg:text-lg text-base font-normal md:w-1/2 w-4/5 ">
						Use your Innovation Chain wallet to keep track of your Innovation Chain Coin balance and
						transaction history.
					</p>
				</div>

				{/* transfer form */}
				<InvestForm />
			</div>
		</section>
	);
}

export default InvestPage;
