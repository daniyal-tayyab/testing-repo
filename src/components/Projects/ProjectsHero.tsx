import React from "react";

// custom
import bg_OurProjects from "../../assets/bg_OurProjects.svg";

function ProjectsHero() {
	return (
		<div className="min-h-[60vh] md:h-screen h-auto relative flex md:items-center items-start md:justify-center justify-start">
			<img
				className="absolute -z-250 top-0 left-0 md:h-screen h-auto w-full opacity-50"
				src={bg_OurProjects}
				alt="Trust Chain"
			/>
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto md:my-0 my-10 lg:max-w-max-custom max-w-max-width w-90vw bg-transparent">
				<div className="flex flex-col items-center justify-center text-center space-y-12">
					<h1 className="font-bold text-7xl">Our Projects</h1>
					<p className="w-8/12 text-2xl">
						The Trust Chain ecosystem aims to offer a secure, convenient, and
						user-friendly payment solution to the world. Trust Chain includes a range of
						features and services through its rich, multi-functional ecosystem.
					</p>
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

export default ProjectsHero;
