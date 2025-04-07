import React, { useEffect } from "react";

function TeamPage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	return <div>test</div>;
}

export default TeamPage;
