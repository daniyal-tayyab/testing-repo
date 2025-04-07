import React, { useState, useEffect } from "react";

// libs
import Web3 from "web3";
import axiosBase from "axios";
import { axios, axios_auth } from "../../utils/axios";
import { toast } from "react-toastify";
import { RiExchangeFill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

// custom
import logo from "../../assets/logo-nav.png";
import { BNB_ABI, coinsTest, coins, contractABI } from "../../utils/constants";
import { useMainContext } from "../../contexts/main_context";

const baseURL =
	"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

function InvestForm() {
	//{process.env.NODE_ENV
	// Initialize web3 with MetaMask's provider
	const web3 = new Web3(window.ethereum);

	const [isOpen, setOpenStatus] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currentCoin, setCurrentCoin] = useState({
		name: coins[0].title,
		logo: coins[0].icon,
		contractAdd: coins[0].contract,
		ChainID: coins[0].ChainID,
		symbol: coins[0].symbol,
		pricePerUSD: 1,
		ABI: coins[0].ABI,
	});
	const [client, setClient] = useState("");
	const [requiredTolAmount, setRequiredTolAmount] = useState("");
	const [amountTakedFromClient, setAmountTakedFromClient] = useState("");
	const [realCoinsList, setRealCoinList] = useState([]);
	const [transactionStatus, setTransactionStatus] = useState(0);

	const { setAddress, address } = useMainContext();
	const [isTokenSelected, setIsTokenSelected] = useState(false);

	// get the required amount
	const handleChange = (e: any) => {
		setRequiredTolAmount(e.target.value);
		setAmountTakedFromClient(e.target.value / currentCoin.pricePerUSD + "");
	};

	// get a slelected coin
	const handleCoinsOption = (e: any) => {
		const tempCoin = coins.find((item) => item.title === e.target.id);
		setCurrentCoin({
			...currentCoin,
			name: e.target.id,
			logo: tempCoin ? tempCoin.icon : coins[0].icon,
			contractAdd: tempCoin ? tempCoin.contract : coins[0].contract,
			symbol: tempCoin ? tempCoin.symbol : coins[0].symbol,
			ABI: tempCoin ? tempCoin.ABI : coins[0].ABI,
		});

		setOpenStatus(!isOpen);
		setRequiredTolAmount("");
		setAmountTakedFromClient("");
	};

	// Check the transaction status
	function checkTransactionStatus(transactionHash: any) {
		const checkInterval = setInterval(() => {
			web3.eth
				.getTransactionReceipt(transactionHash)
				.then((receipt) => {
					if (receipt) {
						clearInterval(checkInterval);

						if (receipt.status) {
							setTransactionStatus(1);
							// send data to back
							const transactioData = {
								address: client,
								hash: receipt.transactionHash,
								amount: web3.utils.toWei(amountTakedFromClient, "ether"),
								status: "success",
								type: "FromUser",
							};
							saveTransaction(transactioData);
							// console.log("Transaction was successful");
							// console.log("Receipt:", receipt);
						} else {
							toast.error("Transaction failed, please try again", {
								position: "top-left",
							});
							setTransactionStatus(0);
							setLoading(false);
							return;
							// console.log("Transaction failed");
							// console.log("Receipt:", receipt);
						}
					}
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		}, 3000); // Check every 3 seconds
	}

	// get the cost from client as bnb
	const transferFromClient = async () => {
		try {
			//console.log("test", Boolean(window.ethereum));
			if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
				toast.warning(
					"Please open website from metamask app on mobile,or please open it on a computer",
					{
						position: "top-left",
					}
				);
			} else {
			}

			setLoading(true);
			// check the required Amount
			if (parseFloat(requiredTolAmount) < 100) {
				toast.error(
					"The required coins of Innovation Chain Coin are low, please order 100 or more",
					{
						position: "top-left",
					}
				);
				setTransactionStatus(0);
				setLoading(false);
				return;
			} else {
			}

			// Check if MetaMask is available
			if (typeof window.ethereum !== "undefined") {
				// Request MetaMask to enable accounts
				window.ethereum
					.request({ method: "eth_requestAccounts" })
					.then((accounts: any) => {
						const account = accounts[0];
						setClient(account);
						setAddress(account);

						// Get the chain ID
						web3.eth
							.getChainId()
							.then((chainId) => {
								if (chainId !== currentCoin.ChainID) {
									toast.error(
										"You're using a different network, please use the BNB network",
										{
											position: "top-left",
										}
									);
									setTransactionStatus(0);
									setLoading(false);
									return;
								} else {
									// token
									if (currentCoin.name !== "BNB") {
										setIsTokenSelected(!isTokenSelected);
										// const provider = new Web3Provider(window.ethereum);
										// transferTokenFromClient(
										// 	provider,
										// 	currentCoin.contractAdd,
										// 	web3.utils.toWei(amountTakedFromClient, "wei"),
										// 	currentCoin.name === "USDT" ? 6 : 18,
										// 	currentCoin.ABI
										// )
									} else {
										// bnb
										const masterWallet =
											process.env.NODE_ENV === "production"
												? process.env.REACT_APP_WALLET_ADD_MAINNET_RECEIVE
												: process.env.REACT_APP_WALLET_ADD_TESTNET_RECEIVE;

										// Set the transaction details
										const transactionData = {
											from: account,
											to: masterWallet,
											value: web3.utils.toWei(amountTakedFromClient, "ether"),
											// gasPrice: web3.utils.toWei("5", "gwei"), // Gas price in Gwei
											gasLimit: 21000, // Gas limit for a standard BNB transfer
										};

										// Send the transaction
										web3.eth
											.sendTransaction(transactionData)
											.on("transactionHash", (hash) => {
												checkTransactionStatus(hash);
											})
											.on("error", (error) => {
												setLoading(false);
												console.log("tets trans");
												toast.error(error.message, {
													position: "top-left",
												});
											});
									}
								}
							})
							.catch((error) => {
								toast.error(error, {
									position: "top-left",
								});
								setTransactionStatus(0);
								setLoading(false);
							});
					})
					.catch((error: any) => {
						setLoading(false);
						setTransactionStatus(0);
						toast.error("Error connecting to MetaMask, please do it again", {
							position: "top-left",
						});
					});
			} else {
				setLoading(false);
				setTransactionStatus(0);
				toast.error("MetaMask is not available, please install it", {
					position: "top-left",
				});
			}
		} catch (error) {
			toast.error("The first process is not completed, please do it again", {
				position: "top-left",
			});
			setLoading(false);
			console.log(error);
			setTransactionStatus(0);
			// send data to back
			const transactioData = {
				address: "null",
				hash: "null",
				amount: 0,
				status: "canceled",
				type: "FromUser",
			};
			saveTransaction(transactioData);
		}
	};

	// get the cost from client as bnb
	const transferFromClientWithAddress = async (address: any) => {
		try {
			//console.log("test", Boolean(window.ethereum));
			if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
				toast.warning(
					"Please open website from metamask app on mobile,or please open it on a computer",
					{
						position: "top-left",
					}
				);
			} else {
			}

			setLoading(true);
			// check the required Amount
			if (parseFloat(requiredTolAmount) < 100) {
				toast.error(
					"The required coins of Innovation Chain Coin are low, please order 100 or more",
					{
						position: "top-left",
					}
				);
				setTransactionStatus(0);
				setLoading(false);
				return;
			} else {
			}

			// Get the chain ID
			web3.eth
				.getChainId()
				.then((chainId) => {
					if (chainId !== currentCoin.ChainID) {
						toast.error(
							"You're using a different network, please use the BNB network",
							{
								position: "top-left",
							}
						);
						setTransactionStatus(0);
						setLoading(false);
						return;
					} else {
						// token
						if (currentCoin.name !== "BNB") {
							setIsTokenSelected(!isTokenSelected);
							// const provider = new Web3Provider(window.ethereum);
							// transferTokenFromClient(
							// 	provider,
							// 	currentCoin.contractAdd,
							// 	web3.utils.toWei(amountTakedFromClient, "wei"),
							// 	currentCoin.name === "USDT" ? 6 : 18,
							// 	currentCoin.ABI
							// )
						} else {
							// bnb
							const masterWallet =
								process.env.NODE_ENV === "production"
									? process.env.REACT_APP_WALLET_ADD_MAINNET_RECEIVE
									: process.env.REACT_APP_WALLET_ADD_TESTNET_RECEIVE;

							// Set the transaction details
							const transactionData = {
								from: address,
								to: masterWallet,
								value: web3.utils.toWei(amountTakedFromClient, "ether"),
								// gasPrice: web3.utils.toWei("5", "gwei"), // Gas price in Gwei
								gasLimit: 21000, // Gas limit for a standard BNB transfer
							};

							// Send the transaction
							web3.eth
								.sendTransaction(transactionData)
								.on("transactionHash", (hash) => {
									checkTransactionStatus(hash);
								})
								.on("error", (error) => {
									setLoading(false);
									console.log("tets trans");
									toast.error(error.message, {
										position: "top-left",
									});
								});
						}
					}
				})
				.catch((error) => {
					toast.error(error, {
						position: "top-left",
					});
					setTransactionStatus(0);
					setLoading(false);
				});
		} catch (error) {
			toast.error("The first process is not completed, please do it again", {
				position: "top-left",
			});
			setLoading(false);
			console.log(error);
			setTransactionStatus(0);
		}
	};

	const handleInvest = async () => {
		if (address != "" && address.length > 0) {
			transferFromClientWithAddress(address);
		} else {
			transferFromClient();
		}
	};

	// get the cost from client as token BUSD , TUSD , BSC_USD
	const transferTokenFromClient = async (
		baseProvider: any,
		tokenAdd: string,
		amount: string,
		digits: number,
		abiContract: any
	) => {
		//const masterAddress = "0x6d853a088F7ec7025AB07bB5f99db34Bd4c7a533"; //master wallet
		//console.log("test");
		const masterAddress =
			process.env.NODE_ENV === "production"
				? process.env.REACT_APP_WALLET_ADD_MAINNET_RECEIVE
				: process.env.REACT_APP_WALLET_ADD_TESTNET_RECEIVE;

		const tokenContractAddress = tokenAdd; //contract address
		const amountToTransfer = ethers.parseUnits(amount, digits); // digits are 18 decimal places for BSC-USD & BUSD , 6 decimal places for USDT
		//const amountToTransfer = ethers.utils.parseUnits(amount, digits); // digits are 18 decimal places for BSC-USD & BUSD , 6 decimal places for USDT

		const signer = baseProvider.getSigner();

		const tokenContract: any = new ethers.Contract(
			tokenContractAddress,
			abiContract,
			signer
		);
		try {
			// const gasLimit = await tokenContract.estimateGas.transfer(
			// 	masterAddress,
			// 	amountToTransfer
			// );
			// console.log("inside", gasLimit);

			const transferTx = await tokenContract.transfer(
				masterAddress,
				amountToTransfer,
				{
					gasLimit: 5000000, //gasLimit,
				}
			);
			// console.log("Transfer transaction hash:", transferTx.hash);
			// await transferTx.wait();
			// console.log("Transfer successful!");
			setTransactionStatus(1);
			// send data to back
			const transactioData = {
				address: client,
				hash: transferTx.hash,
				amount: web3.utils.toWei(amountTakedFromClient, "wei"),
				status: "success",
				type: "FromUser",
			};
			saveTransaction(transactioData);
			setLoading(false);
			setIsTokenSelected(false);
		} catch (error: any) {
			toast.error(error.message, {
				position: "top-left",
			});
			setTransactionStatus(0);
			setLoading(false);
			setIsTokenSelected(false);
			//console.error("Error transferring BUSD:", error);
		}
	};

	useEffect(() => {
		axiosBase.get(baseURL).then((response: any) => {
			setRealCoinList(response.data);
			//console.log(response.data);
		});
	}, []);

	useEffect(() => {
		//console.log('api', realCoinsList)
		if (realCoinsList.length > 0) {
			const tempCoinDetails: any = realCoinsList.find(
				(item: any) => item.symbol === currentCoin.symbol
			);
			//console.log("test",tempCoinDetails)
			setCurrentCoin({
				...currentCoin,
				pricePerUSD: tempCoinDetails ? tempCoinDetails.current_price : 1,
			});
		}
	}, [realCoinsList, currentCoin.name]);

	const saveTransaction = async (data: any) => {
		axios
			.post("/transaction", data)
			.then((res) => {
				//console.log("res", res);
				if (res.data.status === true) {
				} else {
					toast.warning(
						"The process is done, but the transaction was not saved",
						{
							position: "top-left",
						}
					);
				}
			})
			.catch((error) => {
				toast.warning(
					"The process is done, but the transaction was not saved",
					{
						position: "top-left",
					}
				);
			});
	};

	async function withdraw() {
		try {
			//const gift = (parseFloat(requiredTolAmount) * 10) / 100;
			const amount = parseFloat(requiredTolAmount) * 10000000000; //100000000000;

			//console.log("amount", requiredTolAmount, amount);

			const contractAddress: any =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_TOLCOIN_MAINNET
					: process.env.REACT_APP_TOLCOIN_TESTNET;

			const functionName = "transfer";
			const provider = new ethers.JsonRpcProvider( //"https://data-seed-prebsc-2-s1.binance.org:8545"
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_BNB_API_URL_MAINNET
					: process.env.REACT_APP_BNB_API_URL_TEST
			);

			const pKey: any =
				process.env.NODE_ENV === "production"
					? process.env.REACT_APP_WALLET_PRIVATE_MAINNET
					: process.env.REACT_APP_WALLET_PRIVATE_TESTNET;

			const wallet = new ethers.Wallet(pKey, provider);

			const contract = new ethers.Contract(
				contractAddress,
				contractABI,
				wallet
			);

			const functionFragment: any =
				contract.interface.getFunction(functionName);
			const encodedData = contract.interface.encodeFunctionData(
				functionFragment,
				[client, amount] //addres is user claim address and amount is TolCoin
			);
			const transaction = {
				to: contractAddress,
				gasLimit: 5000000,
				data: encodedData,
			};
			const response = await wallet.sendTransaction(transaction);

			// send data to back
			const transactioData = {
				address: client,
				hash: response.hash,
				amount: parseInt(requiredTolAmount),
				status: "success",
				type: "ToUser",
			};

			saveTransaction(transactioData);
			console.log("Here is the reposne : ", response);
			toast.success(`Successfully transferred`, {
				position: "top-left",
			});
			setLoading(false);
			// Handle the response or perform additional actions if needed
		} catch (error) {
			// send data to back
			const transactioData = {
				address: client,
				hash: "null",
				amount:
					parseInt(requiredTolAmount) +
					(parseFloat(requiredTolAmount) * 10) / 100,
				status: "canceled",
				type: "ToUser",
			};

			saveTransaction(transactioData);

			toast.error("The second process is not completed, please do it again", {
				position: "top-left",
			});
			setLoading(false);
			console.log(error);
			setTransactionStatus(0);
		}
	}

	useEffect(() => {
		if (transactionStatus) {
			withdraw();
			setTransactionStatus(0);
			//console.log("test");
		}
	}, [transactionStatus]);

	//call for tranfer token
	useEffect(() => {
		if (isTokenSelected) {
			const provider = new Web3Provider(window.ethereum);

			transferTokenFromClient(
				provider,
				currentCoin.contractAdd,
				amountTakedFromClient, //web3.utils.toWei(amountTakedFromClient, "ether"),
				currentCoin.name === "USDT" ? 6 : 18,
				currentCoin.ABI
			);
			console.log("test - token");
		}
	}, [isTokenSelected]);

	return (
		<div className="grid grid-cols-12 S-950:gap-20 gap-4 mt-14">
			{/* box */}
			<div className="S-950:col-span-5 col-span-12 S-950:w-full sm:w-1/2 w-4/5 mx-auto border border-clr-secondary-bright rounded-3xl flex flex-col space-y-2 p-5">
				<div className="flex flex-row items-center justify-between">
					<span className="font-semibold text-lg leading-7 ">To Innovation Chain :</span>
					<span className="text-clr-main-bright">
						<img
							className="-ml-4 sm:w-16 w-16 sm:h-12 h-12"
							src={logo}
							alt="Tree Of Life"
						/>
					</span>
				</div>
				<div className="w-full">
					<input
						type="number"
						id="amount"
						name="amount"
						className="w-full bg-transparent py-2 px-1 outline-none placeholder:text-white text-clr-main-bright border-b border-white placeholder:text-base placeholder:font-medium appearance-none"
						placeholder="Amount"
						value={requiredTolAmount}
						onChange={handleChange}
					/>
					<p className="text-clr-main-bright text-sm font-medium tracking-wider pt-1">
						1 Innovation Chain = 1 USD
					</p>
				</div>
			</div>
			{/* icon */}
			<div className="S-950:col-span-2 col-span-12 relative flex items-center justify-center">
				<span className="text-clr-main-bright rounded-full">
					<span className="absolute top-0 left-0 S-950:w-full w-1/2 S-950:h-full h-1/2 bg-clr-main-bright rounded-full blur-3xl -z-10"></span>
					<span className="">
						<RiExchangeFill className="S-950:w-20 w-14 S-950:h-20 h-14 S-950:rotate-0 rotate-90" />
					</span>
				</span>
			</div>
			{/* box */}
			<div className="S-950:col-span-5 col-span-12 S-950:w-full sm:w-1/2 w-4/5 mx-auto border border-clr-secondary-bright rounded-3xl flex flex-col space-y-2 p-5">
				<div className="flex flex-row items-center justify-between">
					<div className="relative">
						<div className="font-semibold text-lg leading-7 flex flex-row items-center space-x-2">
							<span>From</span>
							<span
								className="flex flex-row space-x-2 items-center justify-center cursor-pointer"
								onClick={() => {
									setOpenStatus(!isOpen);
								}}
							>
								<span>{currentCoin.name}</span>
								<MdKeyboardArrowDown />
							</span>
						</div>
						{isOpen && (
							<ul className="absolute bg-clr-secondary-dark px-2 py-1 rounded-lg font-medium w-28">
								{coins.map((item, index) => {
									return (
										<li
											key={index}
											className="p-1 border-b cursor-pointer hover:text-clr-main-bright last:border-none"
											id={item.title}
											onClick={handleCoinsOption}
										>
											{item.title}
										</li>
									);
								})}
							</ul>
						)}
					</div>
					<span className="text-clr-main-bright">
						<img
							className="-ml-4 sm:w-16 w-16 sm:h-12 h-12"
							src={currentCoin.logo}
							alt="BNB Logo"
						/>
					</span>
				</div>
				<div className="w-full">
					<input
						type="text"
						id="result"
						name="result"
						readOnly
						className="w-full bg-transparent py-2 px-1 outline-none placeholder:text-white text-clr-main-bright border-b border-white placeholder:text-base placeholder:font-medium"
						placeholder="Result"
						value={amountTakedFromClient}
						onChange={() => {}}
					/>
					<p className="text-clr-main-bright text-sm font-medium tracking-wider pt-1">
						1 {currentCoin.name} = {`${currentCoin.pricePerUSD} USD`}
						{/* currentCoin.symbol === "bnb" ? currentCoin.pricePerUSD :  */}
					</p>
				</div>
			</div>
			{/* submit */}
			<div className="flex flex-row items-center justify-center mx-auto w-full col-span-12 mt-8">
				<button
					className="capitalize bg-clr-main-bright text-clr-main-dark text-xl font-semibold py-2 px-10 rounded flex flex-row items-center justify-center space-x-12"
					onClick={handleInvest}
				>
					<span>Buy</span>
					{loading && (
						<svg
							aria-hidden="true"
							role="status"
							className="inline w-4 h-4 mr-3 text-clr-main-dark font-semibold animate-spin"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="#E5E7EB"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentColor"
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);
}

export default InvestForm;
