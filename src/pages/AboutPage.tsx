import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

// custom
import { AboutHero, AboutContent } from "../components/About";

function AboutPage() {
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
		<section className="flex-col space-y-10 relative items-center justify-center">
			<AboutHero />
			<AboutContent />
		</section>
	);
}

export default AboutPage;
