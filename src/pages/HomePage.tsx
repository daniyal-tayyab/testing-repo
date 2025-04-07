// base
import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

// custom
import {
	Hero,
	AboutSection,
	RoadmapSection,
	ProjectsSection,
	PartnersSection,
	HowToSection,
	BenefitsSection,
	FeaturesSection,
	SubscribeSection,
	ContactSection,
} from "../components/Home";

function HomePage() {
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
		<section className=" flex-col space-y-10 relative items-center justify-center">
			<Hero />
			{/* bolb */}
			<div
				id="bolb1"
				className="absolute sm:w-[500px] w-[200px] sm:h-[300px] h-[150px] S-xl:top-[600px] md:top-[520px]  S-xl:left-0 md:left-0 left-36 rounded-full"
			></div>
			{/* end bolb */}
			<AboutSection />
			<RoadmapSection />
			<ProjectsSection />
			<PartnersSection />
			<HowToSection />
			<BenefitsSection />
			<FeaturesSection />
			<SubscribeSection />
			{/* <ContactSection /> */}
		</section>
	);
}

export default HomePage;
