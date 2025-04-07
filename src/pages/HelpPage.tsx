import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";
import YouTube from "react-youtube";

function HelpPage() {
	const videoId = "QhR9KarBNNo";
	const opts = {
		// height: "500",
		// width: "710",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

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
				{/* video */}
				<div
					id="youtube-container"
					className="mt-3 rounded-lg border border-clr-off-white shadow-2xl"
				>
					<YouTube videoId={videoId} opts={opts} />
				</div>
				{/* content */}
				<div className="flex flex-col items-start justify-center mt-5 space-y-10">
					{/* section */}
					<div className="flex flex-col text-clr-off-white">
						{/* <h1 className="text-clr-main-bright text-3xl font-bold">
							Introduction :
						</h1> */}
						<p className="mt-2 w-[75%] font-semibold text-lg">
							Welcome to Trust Chain Coin! This user manual will guide you through the
							process of signing up, navigating the platform, and utilizing its
							features. Trust Chain Coin offers a secure and user-friendly environment
							for cryptocurrency enthusiasts. Let's get started!
						</p>
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						<h1 className="text-clr-main-bright text-3xl font-bold">
							Account Registration:
						</h1>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Signing Up
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								To create a Trust Chain account, follow these steps:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>Visit the Trust Chain Coin website.</li>
								<li>Click on the "Sign Up" button.</li>
								<li>
									Fill in the required information, including username, email
									address, and password.
								</li>
								<li>
									If you have a referral code, enter it in the designated field.
								</li>
								<li>Read and agree to the terms and conditions.</li>
								<li>Click on the "Register" button to create your account.</li>

								<li>
									You will receive an email with an OTP (One Time Password)
									verification code.
								</li>
								<li>
									Return to the page and enter your OTP verification code.
								</li>
								<li>Click on the "Verify" button to verify your account.</li>
							</ul>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Logging In
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								If you already have a Trust Chain Coin account, follow these steps to log
								in:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>Visit the Trust Chain website.</li>
								<li>Click on the "Login" button.</li>
								<li>Enter your username and password.</li>
								<li>Click on the "Login" button to access your account.</li>
								<li>
									After the login, you will receive an email with an OTP
									verification code. Enter your OTP to verify your account.
								</li>
								<li>
									Once verified, you will be able to access your Trust Chain Coin
									account.{" "}
								</li>
							</ul>
							<p className="mt-2 ml-5 w-[75%] font-semibold text-lg">
								NOTE: When you attempt to login to Trust Chain Coin at any time, you will
								be receiving an OTP to your email.
							</p>
						</div>
						{/* sub section */}
						{/* <div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Account Verification :
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								After registering, you will receive an email with a verification
								code. Follow the instructions in the email to verify your
								account. Once verified, you can log in to your ToLCoin account.
							</p>
						</div> */}
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						<h1 className="text-clr-main-bright text-3xl font-bold">
							Dashboard Overview :
						</h1>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Account Information
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								Upon logging in, you will be directed to the dashboard. The
								dashboard provides an overview of your account information,
								including your username, email address, and associated details.
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Referral Code
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								In the dashboard, you can find your unique referral code. Share
								this code and invite others to earn rewards through the Trust Chain Coin
								referral program.
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Staking Levels
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								Trust Chain Coin offers different staking levels. In the dashboard, you
								can choose the staking level that suits your investment
								preferences and goals.
							</p>
						</div>
						{/* sub section */}
						{/* <div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								2.3 Staking Levels :
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								ToLCoin offers different staking levels. In the dashboard, you
								can choose the staking level that suits your investment
								preferences and goals.
							</p>
						</div> */}
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								My Team
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								The "My Team" section displays information about your network
								and team members. Here, you can track your team's progress and
								earnings.
							</p>
						</div>
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						<h1 className="text-clr-main-bright text-3xl font-bold">
							Investing in Trust Chain
						</h1>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Investment Process
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								To invest in Trust Chain, follow these steps:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>Click on the "Invest" button in the dashboard.</li>
								<li>
									Connect your preferred wallet (e.g., MetaMask) to the Trust Chain
									platform.
								</li>
							</ul>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Selecting the Currency
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								Choose the currency you want to convert into Trust Chains coin. The
								platform supports various cryptocurrencies and fiat currencies.
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Purchasing Innovatin Chain coin
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								Enter the amount of Trust Chain you wish to purchase. The platform
								will display the current conversion rate and the equivalent
								amount in USD.
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Transaction Confirmation
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								Review the transaction details and confirm the purchase. Follow
								the instructions provided by your connected wallet (e.g.
								MetaMask) to authorize the transaction.
							</p>
						</div>
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						<h1 className="text-clr-main-bright text-3xl font-bold">
							Security and Privacy
						</h1>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Keeping Your Account Secure
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								To ensure the security of your Trust Chain Coin account, follow these
								best practices:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>Use a strong and unique password.</li>
								<li>Keep your login credentials confidential.</li>
								<li>Be cautious of phishing attempts and suspicious links.</li>
								<li>Regularly update your device's security software.</li>
							</ul>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Privacy Policy
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								For detailed information about how Trust Chain Coin handles user data and
								ensures privacy, refer to the Privacy Policy on the Trust Chain Coin
								website.
							</p>
						</div>
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						<h1 className="text-clr-main-bright text-3xl font-bold">
							Support and Assistance
						</h1>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								FAQs
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								If you have any questions or need assistance, visit the FAQs
								section on the Trust Chain Coin website. Here, you can find answers to
								common queries.
							</p>
						</div>
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								Contacting Customer Support
							</h2>
							<p className="mt-2 ml-5 w-[75%]">
								For personalized support, contact the Trust Chain Coin customer support
								team. You can reach out via email or through the contact form
								provided on the website.
							</p>
						</div>
					</div>
					{/* section */}
					<div className="flex flex-col text-clr-off-white space-y-8">
						{/* <h1 className="text-clr-main-bright text-3xl font-bold">
							Conclusion:
						</h1> */}
						<p className="mt-2 w-[75%] font-semibold text-lg">
							Congratulations! We hope this guide has provided you with the
							necessary information to navigate the platform, invest in Trust Chain Coin,
							and ensure the security of your account. Should you require
							further assistance, our support team is ready to help. Happy
							investing with Trust Chain Coin!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HelpPage;
