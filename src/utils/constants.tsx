// icons
import {
	FaLinkedinIn,
	FaInstagram,
	FaFacebookF,
	FaAutoprefixer,
} from "react-icons/fa";
import { HiShieldCheck, HiOutlineShieldCheck } from "react-icons/hi";
import {
	TbCoinBitcoin,
	TbBrandCoinbase,
	TbBrandWalmart,
	TbCurrencyHryvnia,
} from "react-icons/tb";
import { SiBitcoinsv, SiBinance } from "react-icons/si";
import { RiTrainLine } from "react-icons/ri";
import { DiScala } from "react-icons/di";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdSecurity } from "react-icons/md";

// svg
import BNB_logo from "../assets/BNB_logo.svg";

import BUSD_logo from "../assets/busd-logo.svg";
import USDT_logo from "../assets/usdt-logo.svg";
import BSC_USD_logo from "../assets/bsc_usd.png";
import {
	TicksnTRavel,
	CoinBazzar,
	CoinPuls,
	Excluvio,
	Gamiverz,
	Insurizen,
	LottoLuck,
	NovaAsset,
	CashCare,
	RedCharge,
	Wellplex,
	ZonNFT,
	Bondvortex,
	Chainhomes,
	TreePays,
} from "../assets/logos_projects";

export const api_url =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_Back_URL_SERVER
		: process.env.REACT_APP_Back_URL_TEST;

export const navbarList = [
	{
		id: "navList_1",
		text: "Home",
		href: "/",
	},
	// {
	// 	id: "navList_2",
	// 	text: "About",
	// 	href: "/about",
	// },
	// {
	// 	id: "navList_3",
	// 	text: "Our Projects",
	// 	href: "/projects",
	// },
	{
		id: "navList_4",
		text: "Sign UP",
		href: "/register",
	},
	{
		id: "navList_5",
		text: "Login",
		href: "/login",
	},
	// {
	// 	id: "navList_4",
	// 	text: "White Paper",
	// 	href: "/whitepaper",
	// },
];

export const socialList = [
	{
		id: "socialList_1",
		icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
		href: "https://www.linkedin.com/company/innovationchain/",
	},
	{
		id: "socialList_2",
		icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
		href: "https://www.instagram.com/innovationchain/",
	},
	{
		id: "socialList_3",
		icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
		href:"#",
	},
];

export const footerLinks = [
	{
		id: "footer_col_1",
		name: "Product",
		options: [
			{
				id: "footer_col_1_1",
				text: "Buy Innovation Chain",
				href: "/invest",
			},
			{
				id: "footer_col_1_2",
				text: "Pricing",
				href: "/",
			},
			{
				id: "footer_col_1_3",
				text: "Change Log",
				href: "/",
			},
			{
				id: "footer_col_1_4",
				text: "Login",
				href: "/login",
			},
			{
				id: "footer_col_1_5",
				text: "Sign Up",
				href: "/register",
			},
		],
	},
	{
		id: "footer_col_2",
		name: "Company",
		options: [
			{
				id: "footer_col_2_1",
				text: "About",
				href: "/about",
			},
			// {
			// 	id: "footer_col_2_5",
			// 	text: "White Paper",
			// 	href: "/whitepaper",
			// },
			{
				id: "footer_col_2_2",
				text: "Careers",
				href: "/",
			},
			{
				id: "footer_col_2_3",
				text: "Blogs",
				href: "https://medium.com/@innovationchain",
			},
			{
				id: "footer_col_2_4",
				text: "Contact Us",
				href: "/",
			},
		],
	},
	{
		id: "footer_col_3",
		name: "Resources",
		options: [
			{
				id: "footer_col_3_1",
				text: "Terms of Use",
				href: "/terms",
			},
			{
				id: "footer_col_3_2",
				text: "Privacy Policy",
				href: "/privacy",
			},
			{
				id: "footer_col_3_3",
				text: "User Agreement",
				href: "/agreement",
			},
			{
				id: "footer_col_3_4",
				text: "FAQ's",
				href: "/faq",
			},
		],
	},
];

export const projects = [
	{
		id: "project_9",
		icon: <img src={TreePays} />,
		title: "Tree Pays",
		color: "#54b5a5",
		content:
			"Unifying transport, construction, energy, automotive and public sector government  authorities through seamless and centralized transactions.",
		socials: [
			{
				id: "socialList_3_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_3_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_3_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_1",
		icon: <img src={TicksnTRavel} />,
		title: "Ticks 'n Travel",
		color: "#1ABB9A",
		content:
			"Merging the best of what the world offers for the discerning traveler. For leisure and business travel stays, air travel and charter flights",
		socials: [
			{
				id: "socialList_1_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_1_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_1_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_6",
		icon: <img src={CashCare} />,
		title: "CashCare",
		color: "#479CCD",
		content:
			"Next-gen financial and banking facilities powered by Innovation Chain, featuring mortgages, lending/borrowing with Innovation Chain, and residency via investment.",
		socials: [
			{
				id: "socialList_6_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_6_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_6_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_2",
		icon: <img src={RedCharge} />,
		title: "Redchange",
		color: "#C62121",
		content:
			"A personified crypto trading experience for enthusiasts and novices, with an intuitive user interface and expanded coin listings.",
		socials: [
			{
				id: "socialList_2_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_2_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_2_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_7",
		icon: <img src={Wellplex} />,
		title: "WellPlex",
		color: "#00A18B",
		content:
			"Bringing together healthcare professionals, hospitals and patients on one platform, with privatized, trackable health records and progress updates.",
		socials: [
			{
				id: "socialList_7_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_7_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_7_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_13",
		icon: <img src={Chainhomes} />,
		title: "Chain Homes",
		color: "#00DBF9",
		content:
			"Disrupting traditional real estate, using next-gen solutions to list and invest in properties, transacting directly through Innovation Chain with the owner.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_5",
		icon: <img src={Insurizen} />,
		title: "Insurizen",
		color: "#614FA1",
		content:
			"Streamline and secure private insurance records across motor, home, health and travel insurance, centralizing policies, incident reports and claims.",
		socials: [
			{
				id: "socialList_5_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_5_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_5_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_15",
		icon: <img src={CoinPuls} />,
		title: "Coin Pulse",
		color: "#B31128",
		content:
			"A luxury experience through Innovation Chain specialized ATM kiosks globally, allowing users to convert between fiat and crypto, and debit/credit cards.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_12",
		icon: <img src={NovaAsset} />,
		title: "Novasset",
		color: "#D5212E",
		content:
			"Enabling individuals and businesses to manage multiple investments and portfolios, with the highest data security and investment opportunities.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_8",
		icon: <img src={Excluvio} />,
		title: "Excluvio",
		color: "#F8DC65",
		content:
			"Premium services, experiences and amenities ranging from entertainment, Innovation Chain-exclusive networking events, social events, F & B and more.",
		socials: [
			{
				id: "socialList_8_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_8_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_8_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_3",
		icon: <img src={Gamiverz} />,
		title: "Gamiverz",
		color: "#F9D342",
		content:
			"Gamers and developers can transact through Innovation Chain to trade in-game assets while building a diverse gaming community.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_4",
		// icon: <HiShieldCheck className="w-20 h-20" />,
		icon: <img src={CoinBazzar} />,
		title: "Coin Bazaar ",
		color: "#D85D36",
		content:
			"Changing the online shopping experience for shoppers and merchants, eliminating payment fraud, data breaches and exorbitant transaction fees.",
		socials: [
			{
				id: "socialList_4_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_4_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_4_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_14",
		icon: <img src={LottoLuck} />,
		title: "Lotto Luck",
		color: "#F9C44A",
		content:
			"Raise the stakes the next-gen way. Purchase lotto’s through Innovation Chain and win a Innovation Chain jackpot, and interact with other players.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_10",
		icon: <img src={ZonNFT} />,
		title: "ZonNFT",
		color: "#337AAD",
		content:
			"Gives the power back to artists together with a vibrant community of investors and collectors,  where creators will be incentivized ethically.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
	{
		id: "project_11",
		icon: <img src={Bondvortex} />,
		title: "Bond Vortex",
		color: "#FFF3B5",
		content:
			"Inclusivity and efficiency through crypto bonds driven by Innovation Chain, enabling governments, corporations and institutions to raise capital.",
		socials: [
			{
				id: "socialList_9_1",
				icon: <FaLinkedinIn className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.linkedin.com/company/innovationchain/",
			},
			{
				id: "socialList_9_2",
				icon: <FaInstagram className="w-5 h-5 font-bold text-4xl" />,
				href: "https://www.instagram.com/innovationchain/",
			},
			{
				id: "socialList_9_3",
				icon: <FaFacebookF className="w-5 h-5 font-bold text-4xl" />,
				href:"#",
			},
		],
	},
];

export const partners = [
	{
		id: "partner_1",
		icon: <SiBinance className="w-6 h-6" />,
		text: "Binance",
	},
	{
		id: "partner_2",
		icon: <TbBrandCoinbase className="w-6 h-6" />,
		text: "Coinbase",
	},
	{
		id: "partner_3",
		icon: <TbCurrencyHryvnia className="w-6 h-6" />,
		text: "Cryptonews",
	},
	{
		id: "partner_4",
		icon: <TbBrandWalmart className="w-6 h-6" />,
		text: "Walmart",
	},
	{
		id: "partner_5",
		icon: <RiTrainLine className="w-6 h-6" />,
		text: "Trainline",
	},
];

export const features = [
	{
		id: "feature_1",
		icon: <HiShieldCheck className="w-9 h-9" />,
		title: "Security",
	},
	{
		id: "feature_2",
		icon: <SiBitcoinsv className="w-8 h-8" />,
		title: "Tradeable",
	},
	{
		id: "feature_3",
		icon: <HiOutlineShieldCheck className="w-9 h-9" />,
		title: "Security",
	},
	{
		id: "feature_4",
		icon: <TbCoinBitcoin className="w-9 h-9" />,
		title: "Tradeable",
	},
];

export const BNB_ABI: any = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_to", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "transfer",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const contractABI: any = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "burn",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "subtractedValue",
				type: "uint256",
			},
		],
		name: "decreaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "addedValue",
				type: "uint256",
			},
		],
		name: "increaseAllowance",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "mint",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const BUSDContractABI: any = [
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		constant: true,
		inputs: [],
		name: "_decimals",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "_name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "_symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "spender", type: "address" },
		],
		name: "allowance",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "approve",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
		name: "burn",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "subtractedValue", type: "uint256" },
		],
		name: "decreaseAllowance",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "getOwner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "addedValue", type: "uint256" },
		],
		name: "increaseAllowance",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
		name: "mint",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "recipient", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transfer",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "sender", type: "address" },
			{ internalType: "address", name: "recipient", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const USDTContractABI: any = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_upgradedAddress", type: "address" }],
		name: "deprecate",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_spender", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "approve",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "deprecated",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_evilUser", type: "address" }],
		name: "addBlackList",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_from", type: "address" },
			{ name: "_to", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "upgradedAddress",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "", type: "address" }],
		name: "balances",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "maximumFee",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "_totalSupply",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "unpause",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "_maker", type: "address" }],
		name: "getBlackListStatus",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ name: "", type: "address" },
			{ name: "", type: "address" },
		],
		name: "allowed",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "paused",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "who", type: "address" }],
		name: "balanceOf",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "pause",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "getOwner",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_to", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "transfer",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "newBasisPoints", type: "uint256" },
			{ name: "newMaxFee", type: "uint256" },
		],
		name: "setParams",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "amount", type: "uint256" }],
		name: "issue",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "amount", type: "uint256" }],
		name: "redeem",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ name: "_owner", type: "address" },
			{ name: "_spender", type: "address" },
		],
		name: "allowance",
		outputs: [{ name: "remaining", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "basisPointsRate",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "", type: "address" }],
		name: "isBlackListed",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_clearedUser", type: "address" }],
		name: "removeBlackList",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "MAX_UINT",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_blackListedUser", type: "address" }],
		name: "destroyBlackFunds",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ name: "_initialSupply", type: "uint256" },
			{ name: "_name", type: "string" },
			{ name: "_symbol", type: "string" },
			{ name: "_decimals", type: "uint256" },
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [{ indexed: false, name: "amount", type: "uint256" }],
		name: "Issue",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: false, name: "amount", type: "uint256" }],
		name: "Redeem",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: false, name: "newAddress", type: "address" }],
		name: "Deprecate",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, name: "feeBasisPoints", type: "uint256" },
			{ indexed: false, name: "maxFee", type: "uint256" },
		],
		name: "Params",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, name: "_blackListedUser", type: "address" },
			{ indexed: false, name: "_balance", type: "uint256" },
		],
		name: "DestroyedBlackFunds",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: false, name: "_user", type: "address" }],
		name: "AddedBlackList",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: false, name: "_user", type: "address" }],
		name: "RemovedBlackList",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "owner", type: "address" },
			{ indexed: true, name: "spender", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "from", type: "address" },
			{ indexed: true, name: "to", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "Transfer",
		type: "event",
	},
	{ anonymous: false, inputs: [], name: "Pause", type: "event" },
	{ anonymous: false, inputs: [], name: "Unpause", type: "event" },
];

export const BSC_USDContractABI: any = [
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: "address", name: "from", type: "address" },
			{ indexed: true, internalType: "address", name: "to", type: "address" },
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		constant: true,
		inputs: [],
		name: "_decimals",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "_name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "_symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ internalType: "address", name: "owner", type: "address" },
			{ internalType: "address", name: "spender", type: "address" },
		],
		name: "allowance",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "approve",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ internalType: "address", name: "account", type: "address" }],
		name: "balanceOf",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
		name: "burn",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "subtractedValue", type: "uint256" },
		],
		name: "decreaseAllowance",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "getOwner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "spender", type: "address" },
			{ internalType: "uint256", name: "addedValue", type: "uint256" },
		],
		name: "increaseAllowance",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
		name: "mint",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [{ internalType: "address", name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ internalType: "string", name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "recipient", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transfer",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ internalType: "address", name: "sender", type: "address" },
			{ internalType: "address", name: "recipient", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [{ internalType: "bool", name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
		name: "transferOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
];

export const coins = [
	{
		id: "coin_1",
		icon: BNB_logo,
		title: "BNB",
		ChainID: 56,
		symbol: "bnb",
		contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
		ABI: contractABI,
	},
	{
		id: "coin_2",
		icon: BUSD_logo,
		title: "BUSD",
		ChainID: 56,
		symbol: "busd",
		contract: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
		ABI: BUSDContractABI,
	},
	{
		id: "coin_3",
		icon: USDT_logo,
		title: "USDT",
		ChainID: 56,
		symbol: "usdt",
		contract: "0x0a70ddf7cdba3e8b6277c9ddcaf2185e8b6f539f",
		ABI: USDTContractABI,
	},
	// {
	// 	id: "coin_4",
	// 	icon: BSC_USD_logo,
	// 	title: "BSC-USD",
	// 	ChainID: 56,
	// 	symbol: "bsc-usd",
	// 	contract: "0x55d398326f99059ff775485246999027b3197955",
	// 	ABI: BSC_USDContractABI,
	// },
];

export const coinsTest = [
	{
		id: "coin_1",
		icon: BNB_logo,
		title: "tBNB",
		ChainID: 97,
		symbol: "bnb",
		contract: "0x094616F0BdFB0b526bD735Bf66Eca0Ad254ca81F",
	},
	// {
	// 	id: "coin_2",
	// 	icon: BUSD_logo,
	// 	title: "BUSD",
	// 	ChainID: 97,
	// 	symbol: "busd",
	// 	contract: "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",
	// },
	// {
	// 	id: "coin_3",
	// 	icon: USDT_logo,
	// 	title: "USDT",
	// 	symbol: "usdt",
	// 	contract: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
	// },
	// {
	// 	id: "coin_4",
	// 	icon: BNB_logo,
	// 	title: "BNB",
	// 	symbol: "bnb",
	// 	contract: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
	// },
];

export const slides = [
	{
		id: "slide_1",
		title: "Title Test",
		subTitle: "Sub-Title Test",
		paragraphs: [
			{
				id: "slide_1_1",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
			{
				id: "slide_1_2",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
			{
				id: "slide_1_3",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
		],
	},
	{
		id: "slide_2",
		title: "Title Test",
		subTitle: "Sub-Title Test",
		paragraphs: [
			{
				id: "slide_2_1",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
			{
				id: "slide_2_2",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
			{
				id: "slide_2_3",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi cumque maxime accusamus vitae veniam. Corrupti doloribus asperiores, delectus fuga placeat, similique officiis optio veniam nesciunt earum non excepturi expedita minus debitis quae adipisci labore! Ad consequatur voluptatem error perspiciatis reiciendis tempore aliquam? Atque possimus soluta eum laudantium placeat et.",
			},
		],
	},
];

export const aboutContent = [
	{
		id: "about_1",
		text: (
			<p
				className="S-xl:text-[50px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-loose tracking-normal"
				id="aboutText"
			>
				Experience True Power of the Innovation Chain -{" "}
				<span className="text-clr-main-bright">Innovatin Chain</span>: Nurturing
				Financial Growth Worldwide.
			</p>
		),
	},
	{
		id: "about_2",
		text: (
			<p
				className="S-xl:text-[50px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-loose tracking-normal"
				id="aboutText"
			>
				Branch Out to New Horizons with -{" "}
				<span className="text-clr-main-bright">Innovation Chain</span>: Where
				Opportunities Blossom.
			</p>
		),
	},
	{
		id: "about_3",
		text: (
			<p
				className="S-xl:text-[50px] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold leading-loose tracking-normal"
				id="aboutText"
			>
				Experience the Strength and Resilience of -{" "}
				<span className="text-clr-main-bright">Innovation Chain</span>: Where Value Grows
				Stronger.
			</p>
		),
	},
];

export const benefitsList = [
	{
		id: "bene_1",
		icon: (
			<FaAutoprefixer className="S-950:w-9 w-7 S-550:h-9 h-7 text-4xl font-bold text-clr-main-dark" />
		),
		title: "Autonomy",
		text: "Innovation Chain Coin offers users total autonomy in financial transactions.",
	},
	{
		id: "bene_2",
		icon: (
			<DiScala className="S-950:w-9 w-7 S-550:h-9 h-7 text-4xl font-bold text-clr-main-dark" />
		),
		title: "Improved Scalability",
		text: "Innovation Chain Coin addresses scalability challenges and enables faster transactions.",
	},
	{
		id: "bene_3",
		icon: (
			<RxTransparencyGrid className="S-950:w-9 w-7 S-550:h-9 h-7 text-4xl font-bold text-clr-main-dark" />
		),
		title: "Transparency",
		text: "All transactions are recorded on a public ledger, ensuring transparency.",
	},
	{
		id: "bene_4",
		icon: (
			<MdSecurity className="S-950:w-9 w-7 S-550:h-9 h-7 text-4xl font-bold text-clr-main-dark" />
		),
		title: "Security",
		text: "Innovation Chain Coin employs robust security measures to protect transactions and user funds.",
	},
];
