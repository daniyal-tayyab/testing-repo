import React, { useEffect } from "react";

// libs
import ReactGA from "react-ga";

function AgreementPage() {
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
						User Agreement
					</h1>
					<div className="flex flex-col text-clr-off-white space-y-8">
						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<p className="mt-2 ml-5 w-full">
								This is an agreement between Phydias SA (trustchain.co”, “we”,
								“us”, or “our”) a company registered in Switzerland and you
								(together with Trust Chain Coin.com, the “Parties” and each a “Party”).
								By using the Trust Chain Coin.com website (the “Site”) and any services
								available within the Site (collectively the “Services”), you
								agree that you have read, understood, and accept all of the
								terms and conditions contained herein (the "User Agreement"), as
								well as our{" "}
								<a
									className="text-clr-main-bright font-bold underline"
									href="https://trustchain.co/privacy"
								>
									Privacy Policy
								</a>{" "}
								and{" "}
								<a
									className="text-clr-main-bright font-bold underline"
									href="https://trustchain.co/terms"
								>
									Terms of Use
								</a>
								. We offer a wide range of Services, and additional terms may
								apply. When you use a Trust Chain Coin.co service, you will also be
								subject to the guidelines, terms, and agreements applicable to
								that particular service (the "Service Terms"). If this User
								Agreement is inconsistent with the Service Terms, the Service
								Terms will control. ENTERING INTO THIS AGREEMENT CONSTITUTES A
								WAIVER OF YOUR RIGHT TO A TRIAL BY JURY AND PARTICIPATION IN A
								CLASS ACTION LAWSUIT.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								1. General Use
							</h2>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								1.1 Eligibility
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								By using our Services and entering into this User Agreement, you
								affirm that you are an individual, at least 18 years of age or
								older, have the capacity to enter into this User Agreement and
								agree to be legally bound by the terms and conditions of this
								User Agreement, including the{" "}
								<a
									className="text-clr-main-bright font-bold underline"
									href="https://trustchain.co/privacy"
								>
									Privacy Policy
								</a>{" "}
								and{" "}
								<a
									className="text-clr-main-bright font-bold underline"
									href="https://trustchain.co/terms"
								>
									Terms of Use
								</a>{" "}
								when applicable.
							</p>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								1.2 Modification.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								We may change the terms of this User Agreement at any time. Any
								such changes shall take effect when posted on the Site, or when
								you use the Services. Read the User Agreement carefully on each
								occasion you use the Services. Your continued use of the
								Services shall signify your acceptance to be bound by the
								current User Agreement.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								2. Compliance with Applicable Law
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Your relationship with Trust Chain Coin.co and use of any of the Services
								may be subject to the laws, regulations, and rules of
								governmental or regulatory authorities in your or our
								jurisdiction (the “Applicable Law”). By entering into this User
								Agreement, you agree to act in compliance with and be legally
								bound to any and all Applicable Law.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								3. Accessing the Services
							</h2>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3.1 Limited License.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								We grant you a limited, non-exclusive, non-transferable license
								to access and use the Services and the Site solely in accordance
								with the terms of this User Agreement.
							</p>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3.2 Credentials.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								You must keep secret all credentials associated with the
								Services. You are solely responsible for managing and
								maintaining the security of any information relating to such
								credentials and agree that Trust Chain Coin.co shall not be held
								responsible (and you shall not hold us responsible) for any
								unauthorized access to the Services or any resulting harm you
								may suffer.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3.3 Compliance.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								Your access to one or more Services may be contingent upon
								creating a user account and satisfying our onboarding processes
								as well as our Compliance Program. “Compliance Program” means
								the requirements set by Trust Chain Coin.co for collecting, verifying,
								recording and reporting information about you, upon first
								accessing certain Services and on an ongoing basis, whether for
								our business risk-management purposes or to comply with legal
								requirements applicable to us. The information we request may
								include, without limitation, personally identifiable information
								such as network address, name, email, address, telephone number,
								date of birth, taxpayer identification, national identification
								or official government-issued photo identification, and bank
								account information or other information we may reasonably deem
								helpful in satisfying our risk management or legal obligations.
								In providing this information to us you represent that it is
								accurate and agree to update your information promptly, but in
								no event later than 14 days following any change in your
								information. Failure to provide information or update your user
								account promptly may result in Services being unavailable to
								you.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3.4 Communications.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								Any and all communications from Trust Chain Coin.co may be provided to
								you via electronic mail at the address you provided when
								accessing the Services. Trust Chain Coin.co shall not be responsible for
								any harm you may suffer as a result of your failure to receive
								any notice provided to you in connection with this User
								Agreement or your use of Services so long as such notice is
								provided to such email address.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								3.5 Termination.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								We may close, terminate, enable, or disable any or all of the
								Services or your access to the Services at any time and for any
								reason.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								4. Risks of Digital Assets
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Please note that all transactions involving digital assets
								involve substantial risks. You should therefore carefully
								consider whether using our Services is suitable for you in light
								of your financial condition. In considering whether to hold
								digital assets, you should be aware that the price or value of a
								digital asset can change rapidly, decrease, and potentially even
								fall to zero. Past performance is not an indicator of future
								performance. You acknowledge that we are not responsible for any
								loss of your digital asset, resulting from theft, loss, or
								mishandling of private keys outside our control.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								We are not responsible for any digital asset market and we make
								no representations or warranties concerning the real or
								perceived value of digital assets as denominated in any quoted
								currency. Although we may provide historical and/or real-time
								data regarding the price of digital assets, we make no
								representations regarding the quality, suitability, truth,
								usefulness, accuracy, or completeness of such data, and you
								should not rely on such data for any reason whatsoever. You
								understand and agree that the value of digital assets can be
								volatile, and we are not in any way responsible or liable for
								any losses you may incur by using or transferring digital assets
								in connection with our Services.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								We do not provide investment advice and any content contained on
								the Site should not be considered as a substitute for tailored
								investment advice. The contents of our Site and the Services
								should not be used as a basis for making investment decisions.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								5. General Provisions
							</h2>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								5.1 Intellectual Property.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								<span className="font-bold">5.1.1</span> Unless otherwise
								indicated by us, all intellectual property rights and any
								content provided in connection with the Site or the Services,
								are the property of Trust Chain Coin.co or our licensors or suppliers and
								are protected by applicable intellectual property laws. We do
								not give any implied license for the use of the contents of the
								Site or the Services.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								<span className="font-bold">5.1.2</span> You accept and
								acknowledge that the material and content contained in or
								delivered by the Site or the Services is made available for your
								personal, lawful, non-commercial use only and that you may only
								use such material and content for the purpose of using the Site
								or the Services as set forth in this Agreement.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								<span className="font-bold">5.1.3</span> You further acknowledge
								that any other use of content from the Site or the Services is
								strictly prohibited and you agree not to infringe or enable
								others to infringe our intellectual property rights. You agree
								to retain all copyrighted and other proprietary notices
								contained in the material provided via the Site or the Services
								on any copy you make of the material but failing to do so shall
								not prejudice Trust Chain Coin.co’s intellectual property rights therein.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								<span className="font-bold">5.1.4</span> You may not sell or
								modify materials derived or created from the Site or the
								Services or reproduce, display, publicly perform, distribute or
								otherwise use the materials in any way for any public or
								commercial purpose. Your use of such materials on any other
								website or on a file-sharing or similar service for any purpose
								is strictly prohibited. You may not copy any material or content
								derived or created from the Site or the Services without our
								express, written permission.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								<span className="font-bold">5.1.5</span> Any rights not
								expressly granted herein to use the materials contained on or
								through the Site or the Services are reserved by Trust Chain Coin.co in
								full.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								5.2 Accuracy of Information.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								Trust Chain Coin.co endeavors to verify the accuracy of any information
								displayed, supplied, passing through or originating from the
								Services, but such information may not always be accurate or
								current. Accordingly, you should independently verify all
								information before relying on it, and any decisions or actions
								taken based upon such information are your sole responsibility.
								We make no representation or warranty of any kind, express or
								implied, statutory or otherwise, regarding the contents of the
								Services, information and functions made accessible through the
								Services, any hyperlinks to third party websites, or the
								security associated with the transmission of information through
								the Services, or any website linked to the Services.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								5.3 Third Party Services and Content.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								In using the Services, you may view content or services provided
								by third parties, including links to web pages and services of
								such parties (“Third Party Content”). We do not control, endorse
								or adopt any Third Party Content and have no responsibility for
								Third Party Content, including, without limitation, material
								that may be misleading, incomplete, erroneous, offensive,
								indecent or otherwise objectionable in your jurisdiction. In
								addition, your dealings or correspondence with such third
								parties are solely between you and the third party. We are not
								responsible or liable for any loss or damage of any sort
								incurred as a result of any such dealings and your use of Third
								Party Content is at your own risk.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								6. Representations, Warranties, Indemnification, and Limitations
								of Liability
							</h2>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								6.1 Acceptable Use of Trust Chain Coin.co Services.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								When accessing or using the Services, you agree that you are
								solely responsible for your conduct while accessing and using
								our Services. Without limiting the generality of the foregoing,
								you agree that you shall not:
							</p>
							<ul className="ml-14 list-outside list-disc ">
								<li>
									a. use the Services in any manner that could interfere with,
									disrupt, negatively affect or inhibit other users from fully
									enjoying the Services, or that could damage, disable,
									overburden or impair the functioning of our Services in any
									manner;
								</li>
								<li>
									b. use the Services to pay for, support or otherwise engage in
									any illegal activities, including, but not limited to illegal
									gambling, fraud, money laundering, or terrorist activities;
								</li>
								<li>
									c. use any robot, spider, crawler, scraper or other automated
									means or interface not provided by us to access our Services
									or to extract data;
								</li>
								<li>
									d. use or attempt to use another person’s credentials without
									authorisation;
								</li>
								<li>
									e. attempt to circumvent any content filtering techniques we
									employ, or attempt to access any service or area of our
									Services that you are not authorized to access;
								</li>
								<li>
									f. introduce to the Services any virus, Trojan, worms, logic
									bombs or other harmful material;
								</li>
								<li>
									g. develop any third-party applications that interact with our
									Services without our prior written consent;
								</li>
								<li>
									h. provide false, inaccurate, or misleading information; or
								</li>
								<li>
									i. encourage or induce any other person to engage in any of
									the activities prohibited under this Section.
								</li>
							</ul>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								6.2 Disclaimer of Warranties.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								trustchain.CO DISCLAIMS ANY AND ALL PROMISES, REPRESENTATIONS AND
								WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING,
								BUT NOT LIMITED TO, ANY WARRANTIES OF MERCHANTABILITY, FITNESS
								FOR A PARTICULAR PURPOSE, DATA ACCURACY, SYSTEM INTEGRATION,
								TITLE, NON-INFRINGEMENT AND/OR QUIET ENJOYMENT, AND ANY SERVICES
								PROVIDED BY trustchain.CO ARE PROVIDED “AS IS” AND “AS AVAILABLE.”
								EXCEPT AS EXPRESSLY PROVIDED HEREIN, YOU ACKNOWLEDGE THAT
								trustchain.CO MAKES NO WARRANTIES UNDER THIS AGREEMENT DIRECTLY FOR
								THE BENEFIT OF ANY END USER, AND THAT trustchain.CO’S OBLIGATIONS
								UNDER THIS AGREEMENT ARE FOR THE BENEFIT OF YOU ONLY, AND NOT
								FOR THE BENEFIT OF ANY OTHER PERSON. IN ENTERING INTO THIS
								AGREEMENT, YOU REPRESENT THAT YOU HAVE NOT RELIED UPON ANY
								REPRESENTATION OR WARRANTY OF trustchain OR ITS AFFILIATES EXCEPT
								AS EXPRESSLY SET FORTH IN THIS AGREEMENT. WE DO NOT MAKE ANY
								REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE SERVICES SHALL
								BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE.
							</p>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								6.3 Limitation of Liability.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								IN NO EVENT SHALL trustchain, ITS AFFILIATES AND SERVICE PROVIDERS,
								OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS,
								EMPLOYEES OR REPRESENTATIVES, BE LIABLE FOR ANY LOST PROFITS OR
								ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL
								DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT
								LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH
								AUTHORIZED OR UNAUTHORIZED USE OF THE SERVICES, OR THIS
								AGREEMENT, EVEN IF AN AUTHORIZED REPRESENTATIVE OF trustchain.CO
								HAS BEEN ADVISED OF, KNEW OF, OR SHOULD HAVE KNOWN OF THE
								POSSIBILITY OF SUCH DAMAGES. FOR EXAMPLE (AND WITHOUT LIMITING
								THE SCOPE OF THE PRECEDING SENTENCE), YOU MAY NOT RECOVER FOR
								LOST PROFITS, LOST BUSINESS OPPORTUNITIES, OR OTHER TYPES OF
								SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL
								DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
								LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
								LIMITATION MAY NOT APPLY TO YOU.
							</p>
							<p className="mt-2 ml-5 w-[80%]">
								UNDER NO CIRCUMSTANCES SHALL WE BE REQUIRED TO DELIVER TO YOU
								ANY VIRTUAL CURRENCY AS DAMAGES, MAKE SPECIFIC PERFORMANCE OR
								ANY OTHER REMEDY. IF YOU WOULD BASE YOUR CALCULATIONS OF DAMAGES
								IN ANY WAY ON THE VALUE OF VIRTUAL CURRENCY, YOU AND WE AGREE
								THAT THE CALCULATION SHALL BE BASED ON THE LOWEST VALUE OF THE
								VIRTUAL CURRENCY DURING THE PERIOD BETWEEN THE ACCRUAL OF THE
								CLAIM AND THE AWARD OF DAMAGES. WE SHALL NOT BE LIABLE FOR ANY
								DAMAGES CAUSED IN WHOLE OR IN PART BY (A) THE MALFUNCTION,
								UNEXPECTED FUNCTION OR UNINTENDED FUNCTION OF ANY COMPUTER OR
								CRYPTOCURRENCY NETWORK, INCLUDING WITHOUT LIMITATION LOSSES
								ASSOCIATED WITH NETWORK FORKS, REPLAY ATTACKS, DOUBLE-SPEND
								ATTACKS, SYBIL ATTACKS, 51% ATTACKS, GOVERNANCE DISPUTES, MINING
								DIFFICULTY, CHANGES IN CRYPTOGRAPHY OR CONSENSUS RULES, HACKING
								OR CYBERSECURITY BREACHES; (B) THE CHANGE IN VALUE OF ANY
								CRYPTOCURRENCY; (C) ANY CHANGE IN LAW, REGULATION OR POLICY, OR
								(D) FORCE MAJEURE. THIS LIMITATION OF LIABILITY IS INTENDED TO
								APPLY WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THIS
								AGREEMENT HAVE BEEN BREACHED OR HAVE PROVEN INEFFECTIVE.
							</p>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								6.4 Indemnification.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								You agree to indemnify and hold harmless Trust Chain Coin.co, its
								affiliates, subsidiaries, directors, managers, members,
								officers, and employees from any and all claims, demands,
								actions, damages, losses, costs or expenses, including without
								limitation, reasonable legal fees, arising out of or relating
								to: (a) your use of the Site or Services; (b) breach of this
								User Agreement or any other policy; (c) feedback or submissions
								you provide; (d) false, incomplete, or misleading information
								relied upon by us to verify your identity and source of funds,
								where applicable; or (e) violation of any rights of any other
								person or entity; provided however, that you shall not indemnify
								Trust Chain Coin.co for claims or losses arising out of Trust Chain Coin.co’s
								gross negligence or willful misconduct. This indemnity shall
								apply to your successors and assigns and shall survive any
								termination or cancellation of this User Agreement.
							</p>
							<p className="mt-2 ml-5 w-[80%] font-semibold">
								Any and all of our indemnities, warranties, and limitations of
								liability (whether express or implied) are hereby excluded to
								the fullest extent permitted under law except as set forth
								herein. Nothing in this User Agreement excludes or limits
								liability which may not be limited or excluded under Applicable
								Law.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								7. Miscellaneous
							</h2>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.1 Force Majeure.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								If by reason in whole or in part of any Force Majeure Event,
								either you or Trust Chain Coin.co is delayed or prevented from complying
								with this User Agreement, then such delay or non-compliance
								shall not be deemed to be a breach of this User Agreement and no
								loss or damage shall be claimed by you or Trust Chain Coin.co by reason
								thereof. “Force Majeure Event” means any event beyond the
								party’s reasonable control, including, but not limited to,
								pandemic, flood, extraordinary weather conditions, earthquake,
								or other act of God, fire, war, insurrection, riot, labor
								dispute, accident, action of government, communications, power
								failure, failure in bank performance, or equipment or software
								malfunction including network splits or “forks” or unexpected
								changes in a computer network upon which the Services rely.
							</p>
							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.2 Taxes.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								It is your responsibility to determine what, if any, taxes apply
								due to your use of the Services, and it is your responsibility
								to report and remit the correct tax to the appropriate tax
								authority. Trust Chain Coin.co is not responsible for determining whether
								taxes apply to your use of the Services or for collecting,
								reporting, withholding, or remitting any taxes arising from any
								virtual currency transactions.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.3 Severability, Reformation.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								In the event that any provision of this User Agreement is
								unenforceable under applicable law, the validity or
								enforceability of the remaining provisions will not be affected.
								To the extent any provision of this User Agreement is judicially
								determined to be unenforceable, a court of competent
								jurisdiction may reform any such provision to make it
								enforceable. The provisions of this User Agreement will, where
								possible, be interpreted so as to sustain its legality and
								enforceability.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.4 Assignment.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								This User Agreement shall be binding on your successors, heirs,
								personal representatives, and assigns. You may not assign or
								transfer any of your rights or obligations under this User
								Agreement without prior written consent of Trust Chain Coin.co, which may
								be withheld in Trust Chain Coin.co’s sole discretion. We may assign
								rights or delegate duties under this User Agreement in our sole
								discretion.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.5 Relationship of the Parties
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								Nothing in this User Agreement is intended to, nor shall create
								any partnership, joint venture, agency, consultancy or
								trusteeship. You and Trust Chain Coin.co are independent contractors for
								purposes of this User Agreement.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.6 Entire Agreement.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								This User Agreement constitutes the entire agreement among the
								Parties with respect to the subject matter described herein and
								shall supersede all prior agreements and understandings, written
								or oral, among the Parties. Subsequent discussions or
								negotiations between you and Trust Chain Coin.co or Trust Chain Coin.co personnel
								shall only amend or become part of this User Agreement by way of
								a written amendment specifically referencing the last updated
								date and name of this User Agreement.
							</p>

							<h4 className="text-clr-main-bright font-semibold text-lg ml-2">
								7.7 Contact Information.
							</h4>
							<p className="mt-2 ml-5 w-[80%]">
								You may contact Trust Chain Coin.co via email at support@trustchain.co.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								8. Dispute Resolution
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Any disputes between you and us arising from your use of the
								Site or the Services (whether arising out of contract, tort,
								statute or any other manner) shall be resolved in the courts of
								Switzerland and Switzerland shall have exclusive jurisdiction
								over such matters. EXCEPT WHERE PROHIBITED BY APPLICABLE LAW,
								YOU AGREE THAT ANY CLAIM YOU MAY HAVE AGAINST US SHALL BE
								BROUGHT INDIVIDUALLY AND YOU SHALL NOT JOIN SUCH CLAIM WITH
								CLAIMS OF ANY OTHER PERSON OR ENTITY OR BRING, JOIN, OR
								PARTICIPATE IN A CLASS ACTION AGAINST US. YOU FURTHER AGREE TO
								EXPRESSLY WAIVE YOUR RIGHT TO A TRIAL BY JURY.
							</p>
						</div>

						{/* sub section */}
						<div className="flex flex-col space-y-2">
							<h2 className="text-clr-secondary-bright font-semibold text-xl">
								9. Feedback
							</h2>
							<p className="mt-2 ml-5 w-[80%]">
								Trust Chain Coin.co strives to improve its Services to address feedback.
								If you have ideas or suggestions regarding improvements or
								additions to the Services, we would like to hear them; however,
								any submission shall be subject to this User Agreement.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								Under no circumstances shall disclosure of any idea or feedback,
								or any related material to Trust Chain Coin.co be subject to any
								obligation of confidentiality or expectation of compensation. By
								submitting an idea or feedback or any related material that
								would be subject to intellectual property rights (the Work) to
								Trust Chain Coin.co, you grant to Trust Chain Coin.co, with respect to the Work
								submitted, a non-exclusive, perpetual, global, royalty-free
								license to use all of the content of such ideas and feedback,
								for any purpose whatsoever.
							</p>

							<p className="mt-2 ml-5 w-[80%]">
								By submitting Work, you are waiving any moral rights to the
								fullest extent permitted under law that you may have in the Work
								and are representing and warranting to Trust Chain Coin.co that the Work
								originated with you, no one else has any rights in the Work, and
								that Trust Chain Coin.co is free of any royalty to implement the Work and
								to use the related material if so desired, as provided or
								modified by Trust Chain Coin.co, without obtaining permission or license
								from any third party. We may sub-license in any way all Work and
								material you have submitted to Trust Chain Coin.co.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AgreementPage;
