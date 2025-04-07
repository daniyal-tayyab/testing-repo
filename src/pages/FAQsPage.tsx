import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

function FAQsPage() {
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
						FAQs
					</h1>
					<div className="flex flex-col text-clr-off-white space-y-8">
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								1 - What is trustchain?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Trust Chain Coin is a next-gen global digital currency that is set to
								transform the way we transact.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								2 - How can I get my referral code?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								After successfully signing up your personal information on the
								website, You will get an email with a link. The last 5 / 6
								letters in this link is your referral code.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								Alternatively, you can get your referral code in the dashboard
								section after logging in.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								3 - How can I get my OTP?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								After filling up your personal information, you will get an OTP
								in the email that you entered. The OTP will expire in 8 minutes.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								4 - I did not get my OTP in my email. What should I do?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								If you do not get an OTP in your email, check your “Spam” folder
								as it may have been misdirected there. Alternatively, if you do
								not get the OTP, reach out to Our customer Support via Whatsapp
								by clicking here [insert link to contact support]
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								5 - How can I connect MetaMask to my account?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								To connect MetaMask to your account, first you’ll need to open
								the MetaMask app, then you’ll click on “Connect a Wallet '' and
								follow the prompted procedures to connect your wallet and to buy
								Trust Chain Coin.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								For more detailed information, check out this video
								<a
									className="ml-2 text-clr-main-bright"
									href="https://youtu.be/4Au-jIQ1X_s"
								>
									https://youtu.be/4Au-jIQ1X_s
								</a>
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								6 - What is the procedure of buying Trust Chain?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								To buy Trust Chain via the website, first you’ll need to create an
								account which you can do by signing up. After you have
								successfully signed up, click on “Invest Now” and then follow
								the prompted procedures to buy Trust Chain Coin.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								For a more detailed step by-step procedure, you can watch this
								video
								<a
									className="ml-2 text-clr-main-bright"
									href="https://youtu.be/QhR9KarBNNo"
								>
									https://youtu.be/QhR9KarBNNo
								</a>
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								7 - How can I buy Trust Chain Coin via mobile?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								To buy Trust Chain Coin via mobile, you’ll need to:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>Download the MetaMask app, </li>
								<li>Connect your wallet,</li>
								<li>Add and switch to “BNB SmartChain Network” </li>
								<li>Import Tokens</li>
								<li>Paste BUSD Token Address</li>
								<li>Paste ToL’s Token Address </li>
								<li>
									Then go to{" "}
									<a
										className="ml-2 text-clr-main-bright"
										href="https://innivationchain.co/"
									>
										www.trustchain.co
									</a>{" "}
								</li>
								<li>Click on “Invest Now”</li>
								<li>Swap BUSD for Trust Chain </li>
							</ul>

							<p className="mt-2 ml-5 w-[80%]">
								Wait for a few seconds as the transaction is processed and
								Trust Chain Coin is transferred to your wallet.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								8 - How can I learn more about Trust Chain?
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								You can get more information regarding Trust Chain Coin on Trust Chain
								blogs
								<a
									className="ml-2 text-clr-main-bright"
									href="https://medium.com/@trustchain"
								>
									https://medium.com/@trustchain
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FAQsPage;
