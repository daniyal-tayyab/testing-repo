import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

function PrivacyPage() {
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
		<div className="h-auto relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto lg:my-0 my-20 lg:max-w-max-custom max-w-max-width w-90vw">
				{/* content */}
				<div className="flex flex-col items-start justify-center mt-5 space-y-10">
					<h1 className="text-clr-main-bright text-5xl font-bold text-center w-full mt-10">
						Privacy Policy
					</h1>
					<div className="flex flex-col text-clr-off-white space-y-8">
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								1 - General information
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Phydias SA, located at rue des Pâquis 8 1202 Genève, Switzerland
								(the “Company”, “we”, or “us”) is the operator of any Website
								published by the Company, including, but not limited to,
								www.trustchain.co, www.tol.network, www.tolcash.com,
								www.trustchain.net, www.tolscan.com, www.tolscan.io (the
								“Websites”).
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								As the operator of the Websites, we take the protection of your
								personal data very seriously. We collect, process, and use your
								personal data in accordance with this privacy policy and in
								compliance with the Swiss Federal Act on Data Protection
								(“FADP”), the Swiss Ordinance to the Federal Act on Data
								Protection (“OFADP”), and the General European Data Protection
								Regulation (“GDPR”), which are currently being coordinated and
								under review as of 5th July, 2023.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								This privacy policy (“Privacy Policy”) will provide you with
								information about the collection, processing and use of your
								personal data when using the Websites. In case you provide us
								with the personal data of third persons (such as family members
								or work colleagues) you should make sure that these persons are
								familiar with this Privacy Policy and you should only share
								their personal data if you have permission to do so and ensure
								that his personal data is correct.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								2 - Responsible Person
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								For any matters relating to data protection you may contact
								info@trustchain.co in writing by e-mail.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								3 - Data processing in connection with the Websites
							</h2>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3-1 - Visiting our Websites
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								When you visit our Websites, the hosting provider(s) of our
								Websites may automatically collect and store various information
								in server log files that your browser transmits to us. The
								information/data mentioned is neither assigned to specific
								persons nor linked to data from other sources. The following
								technical data may be recorded by us, as usual with every
								connection with a web server, without your intervention, and
								stored by us until automatic deletion after no later than two
								days:
							</p>

							<ul className="ml-14 list-outside list-disc ">
								<li>Transaction records</li>
							</ul>

							<p className="mt-2 ml-5 w-[80%]">
								Any collection and processing of this technical data is for the
								purpose of enabling the use of our Websites, continuously
								ensuring system security and stability, optimizing our Websites,
								and for internal statistical purposes. This is our legitimate
								interest in the processing and review of our pending GDPR
								compliance process.
							</p>

							{/* <p className="mt-2 ml-5 w-[80%]">
								Furthermore, the IP addresses may be evaluated, together with
								other data, in case of attacks on the network infrastructure or
								other unauthorized use or misuse of the Websites, for the
								purpose of intelligence and protection, and if appropriate, used
								in criminal proceedings for identification and civil and
								criminal proceedings against the relevant users. This is our
								legitimate interest in the processing and review of our pending
								GDPR compliance process.
							</p> */}

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3-2 - Collection of User Data
							</h4>

							<p className="mt-2 ml-5 w-[80%]">
								We obtain information about you when you use our website, when
								you contact us via email or a web form or if you register to
								receive one of our regular newsletters. We may collect and
								process the following types of information about you:
							</p>

							<ul className="ml-14 list-outside list-disc ">
								<li>Given name </li>
								<li>Email address</li>
								<li>Phone number</li>
								<li>Public Wallet Address</li>
								<li>Gender</li>
							</ul>

							<p className="mt-2 ml-5 w-[80%]">
								This information is only collected during the following
								circumstances and procedures:
							</p>

							<ul className="ml-14 list-outside list-disc ">
								<li>Upon signing up for a Trust Chain Coin account </li>
								<li>Account authentication</li>
								<li>
									When an OTP is sent to your email upon signing up or signing
									in
								</li>
								<li>
									If you have signed up for the Trust Chain Coin newsletter with your
									email address.{" "}
								</li>
							</ul>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Information you provide us
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								You may provide us with personal information by filling in forms
								on our website(s) or by corresponding with us by email or
								live-chat. The personal information you provide may include your
								name, email, phone number, gender and public wallet address.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								By providing us with this information, you expressly consent to
								our use of your personal information in accordance with this
								Privacy Policy, solely for the aforementioned purposes.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								YOUR USER DATA WILL NOT BE STORED BY US AND WILL NOT BE
								COLLECTED FOR ANY INTERNAL PURPOSES, OPERATIONAL PURPOSES OR
								MARKETING PURPOSES.
							</p>
							<p>
								We review our retention periods for personal information on a
								regular basis. We will hold your personal information on our
								systems for as long as is necessary for the relevant activity
								mentioned above.{" "}
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Who has access to your information
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								The user data collected during signing up, signing in, and
								sending the OTP to your email will only be accessible by the
								database administrators for the sole purpose of account
								authentication only. We will take the necessary steps to ensure
								that your privacy rights continue to be protected.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Your choices and your rights
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								We will not contact you for internal purposes, operational
								purposes or marketing purposes unless you have given your prior
								consent.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								How you can update your information
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								The accuracy of your information is important to us. If you
								change your email address, or any of the other information we
								hold is inaccurate or out of date, please email us at
								support@trustchain.co. You have the right to ask for a copy of the
								information Trust Chain Coin holds about you.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Security measures to protect your information
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								When you give us personal information, we take steps to ensure
								that it’s treated securely. While we strive to protect your
								personal information, we cannot guarantee the security of any
								information you transmit to us, and you do so at your own risk.
								When we receive your information for account authentication
								purposes, we make our best effort to ensure its security on our
								systems.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Profiling
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								The provisions of this Policy also apply to the request for and
								sending of our newsletter. The newsletter will only be sent
								after a prior request by the user in the so-called “double
								opt-in procedure” (request on our website and confirmation of a
								corresponding request email). This data will not be passed on to
								third parties. The user has the right to withdraw his or her
								consent at any time, by unsubscribing from the newsletter. To do
								so, simply unsubscribe via the link in the newsletter or send an
								email to support@trustchain.co. The withdrawal of consent shall not
								affect the lawfulness of processing based on consent before its
								withdrawal.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PrivacyPage;
