import React, { useState, useEffect } from "react";

//lib
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuthContext } from "../../contexts/auth_context";
import { toast } from "react-toastify";
import { classNames } from "../../utils/helpers";

const USER_REGEX = /^[A-z][A-z0-9-_ ]{2,23}$/;
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;

function RegisterPage() {
	const { register } = useAuthContext();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(false);
	const [errors, setErrors] = useState(null);
	const [isValid, setIsValid] = useState(false);

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	let location = useLocation();
	const pathSearchArr = location.search?.split("=");
	const [currentToken, setCurrentToken] = useState(
		pathSearchArr.length < 2 ? "ROOT" : pathSearchArr[1]
	);

	//console.log('test',currentToken)

	const [phoneVal, setPhoneVal] = useState("");
	const handelphone = (value: string) => {
		const name = "phone";
		setPhoneVal(value);

		setFormData({
			...formData,
			[name]: value,
		});
		setErrors(null);
	};

	const [formData, setFormData] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		referral_code: currentToken,
		password: "",
		password_confirmation: "",
		checkAgree: false,
	});

	const [formValidate, setFormValidate] = useState({
		name: false,
		username: false,
		email: false,
		phone: false,
		password: false,
		password_confirmation: false,
		checkAgree: false,
	});

	const [formFocus, setFormFocus] = useState({
		name: false,
		username: false,
		email: false,
		phone: false,
		password: false,
		password_confirmation: false,
		checkAgree: false,
	});

	const handleInput = (e: any) => {
		const name = e.currentTarget.name;
		const value = e.currentTarget.value;
		if (name === "checkAgree") {
			setFormData({ ...formData, checkAgree: e.target.checked });
			setFormValidate({ ...formValidate, checkAgree: e.target.checked });
		} else {
			setFormData({ ...formData, [name]: value });
		}
		setErrors(null);
	};

	useEffect(() => {
		setFormValidate({
			...formValidate,
			name: USER_REGEX.test(formData.name),
			username: USER_REGEX.test(formData.username),
			email: EMAIL_REGEX.test(formData.email),
			password: PASSWORD_REGEX.test(formData.password),
			password_confirmation:
				formData.password === formData.password_confirmation,
			phone: PHONE_REGEX.test(formData.phone),
		});

		setIsValid(
			formValidate.name &&
				formValidate.username &&
				formValidate.email &&
				formValidate.phone &&
				formValidate.password &&
				formValidate.password_confirmation &&
				formValidate.checkAgree
		);
	}, [formData, formValidate.password_confirmation, formData.checkAgree]);

	useEffect(() => {
		if (errors) {
			toast.error(errors, {
				position: "top-left",
			});
			console.log("errors", errors);
		}
	}, [errors]);

	useEffect(() => {
		if (status) {
			navigate("/verify");
		}
	}, [status]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setStatus(false);
		setErrors(null);
		setLoading(true);

		// if(formData.referral_code === ""){
		// 	setFormData({...formData,referral_code:"ROOT"})
		// }
		// console.log("form", isValid, formValidate);
		if (!formValidate.name) {
			toast.error(`there was an error. please fill in name.`, {
				position: "top-left",
			});
			setLoading(false);
		} else if (!formValidate.username) {
			toast.error(`there was an error. please fill in username.`, {
				position: "top-left",
			});
			setLoading(false);
		} else if (!formValidate.email) {
			toast.error(`there was an error. please fill in email.`, {
				position: "top-left",
			});
			setLoading(false);
		} else if (!formValidate.phone) {
			toast.error(`there was an error. please fill in phone.`, {
				position: "top-left",
			});
			setLoading(false);
		} else if (!formValidate.password) {
			toast.error(
				`there was an error. Your Password weak must have @-#-$-% /Capital letter/numbers`,
				{
					position: "top-left",
				}
			);
			setLoading(false);
		} else if (!formValidate.password_confirmation) {
			toast.error(
				`there was an error. password Must match the first password input field.`,
				{
					position: "top-left",
				}
			);
			setLoading(false);
		} else if (!formValidate.checkAgree) {
			toast.error(`there was an error. please check the terms.`, {
				position: "top-left",
			});
			setLoading(false);
		} else {
			//console.log("form - valid", formData);
			register({
				...formData,
				setStatus,
				setErrors,
				setLoading,
			});
		}
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="h-auto relative overflow-hidden flex lg:items-center items-start lg:justify-center justify-start">
			{/* bolb */}
			<div
				id="bolb"
				className="absolute w-[300px] h-[300px] S-xl:-top-[5px] lg:top-1 -top-25 right-[100px] rounded-full"
			></div>
			{/* end bolb */}
			<div className="mx-auto lg:my-0 my-20 lg:max-w-max-custom max-w-max-width w-90vw">
				<form
					onSubmit={handleSubmit}
					className="w-full flex flex-col space-y-8 items-center justify-center space-x-1"
				>
					<div className="flex flex-col items-center justify-center">
						<h3 className="S-xl:text-7xl text-6xl font-bold  text-clr-secondary-bright">
							Sign Up
						</h3>
						<p className="S-xl:text-xl text-lg font-normal pt-4 ">
							Already a Trust Chain Coin user?
							<Link
								to="/login"
								className="text-clr-main-bright hover:border-b hover:border-clr-main-bright font-semibold S-xl:text-xl text-lg cursor-pointer"
							>
								{" "}
								Login here
							</Link>
						</p>
					</div>
					<div className="grid grid-cols-12 md:gap-x-14 md:gap-y-14 gap-x-0 gap-y-14 w-[80%] mx-auto">
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.name && !formValidate.name
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="name"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Full Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInput}
								autoComplete="off"
								aria-invalid={formValidate.name ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setFormFocus({ ...formFocus, name: true })}
								onBlur={() => setFormFocus({ ...formFocus, name: false })}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your Full Name"
							/>
							<div
								id="uidnote"
								className={
									formFocus.name && formData.name && !formValidate.name
										? " font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1 "
										: "hidden"
								}
							>
								3 to 24 characters.
							</div>
						</div>
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.username && !formValidate.username
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="username"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								value={formData.username}
								onChange={handleInput}
								autoComplete="off"
								aria-invalid={formValidate.username ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setFormFocus({ ...formFocus, username: true })}
								onBlur={() => setFormFocus({ ...formFocus, username: false })}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your Username"
							/>
							<div
								id="uidnote"
								className={
									formFocus.username &&
									formData.username &&
									!formValidate.username
										? " font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1 "
										: "hidden"
								}
							>
								3 to 24 characters.
							</div>
						</div>
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.email && !formValidate.email
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="email"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Email
							</label>
							<input
								type="text"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInput}
								autoComplete="off"
								aria-invalid={formValidate.email ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setFormFocus({ ...formFocus, email: true })}
								onBlur={() => setFormFocus({ ...formFocus, email: false })}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your Email"
							/>
							<div
								id="uidnote"
								className={
									formFocus.email && formData.email && !formValidate.email
										? " font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1 "
										: "hidden"
								}
							>
								Email not valid
							</div>
						</div>
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.phone && !formValidate.phone
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="phone"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Phone
							</label>
							<PhoneInput
								country={"ae"}
								value={formData.phone}
								onChange={(phone) => handelphone(phone)}
								onFocus={() => setFormFocus({ ...formFocus, phone: true })}
								onBlur={() => setFormFocus({ ...formFocus, phone: false })}
								aria-invalid={formValidate.phone ? "false" : "true"}
								autoFormat={false}
								inputProps={{
									name: "phone",
									required: true,
									autoFocus: true,
								}}
								inputStyle={{
									background: "transparent",
									color: "#F4F4F4",
									fontSize: "18px",
									padding: "25px 48px",
									width: "100%",
									border: "none",
								}}
								buttonClass="countryClassBtn"
								buttonStyle={{
									background: "transparent",
									border: "none",
									fontSize: "18px",
									textAlign: "center",
									padding: "10px 10px",
								}}
								dropdownClass="countryClassDropdown"
								dropdownStyle={{
									background: "#04684B",
									border: "1px solid #04684B",
									borderRadius: "10px",
									padding: "10px 00px",
									display: "flex",
									flexDirection: "column",
									alignItems: "start",
								}}
							/>
							<div
								id="uidnote"
								className={
									formFocus.phone && formData.phone && !formValidate.phone
										? "font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1"
										: "hidden"
								}
							>
								Phone Number is not valid
							</div>
							{/* <input
								type="text"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleInput}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your phone"
							/> */}
						</div>
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.password && !formValidate.password
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="password"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								name="password"
								value={formData.password}
								onChange={handleInput}
								autoComplete="off"
								aria-invalid={formValidate.password ? "false" : "true"}
								aria-describedby="uidnote"
								onFocus={() => setFormFocus({ ...formFocus, password: true })}
								onBlur={() => setFormFocus({ ...formFocus, password: false })}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your Password"
							/>
							<button
								className="absolute top-5 right-5 text-clr-main-bright hover:underline"
								type="button"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? "hide" : "show"}
							</button>
							<div
								id="uidnote"
								className={
									formFocus.password &&
									formData.password &&
									!formValidate.password
										? "font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1  "
										: "hidden"
								}
							>
								Your Password weak must have @-#-$-% /Capital letter/numbers
								<br />
							</div>
						</div>
						{/* input */}
						<div
							className={classNames(
								"md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2",
								formFocus.password_confirmation &&
									!formValidate.password_confirmation
									? "border-red-600"
									: "border-clr-secondary-bright"
							)}
						>
							<label
								htmlFor="password_confirmation"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Confirm Password
							</label>
							<input
								type={showConfirmPassword ? "text" : "password"}
								id="password_confirmation"
								name="password_confirmation"
								value={formData.password_confirmation}
								onChange={handleInput}
								autoComplete="off"
								aria-invalid={
									formValidate.password_confirmation ? "false" : "true"
								}
								aria-describedby="uidnote"
								onFocus={() =>
									setFormFocus({ ...formFocus, password_confirmation: true })
								}
								onBlur={() =>
									setFormFocus({ ...formFocus, password_confirmation: false })
								}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Confirm Password"
							/>
							<button
								className="absolute top-5 right-5 text-clr-main-bright hover:underline"
								type="button"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? "hide" : "show"}
							</button>
							<div
								id="uidnote"
								className={
									formFocus.password_confirmation &&
									formData.password_confirmation &&
									!formValidate.password_confirmation
										? "font-medium absolute -bottom-4 text-red-500 text-xs ml-4 mt-1 "
										: "hidden"
								}
							>
								Must match the first password input field.
							</div>
						</div>
						{/* input */}
						<div className="md:col-span-6 col-span-12 flex flex-col border border-clr-secondary-bright rounded w-full relative py-2">
							<label
								htmlFor="referral_code"
								className="font-bold text-xl absolute -top-4 left-5 bg-clr-background rounded px-3"
							>
								Referral Code
							</label>
							<input
								type="text"
								id="referral_code"
								name="referral_code"
								autoComplete="off"
								value={formData.referral_code}
								onChange={handleInput}
								className="bg-transparent py-3 px-6 outline-none text-lg placeholder:text-clr-off-white placeholder:text-base placeholder:font-normal"
								placeholder="Your referral code"
							/>
						</div>
						<div className="flex items-center mb-4 col-span-12 relative -top-12">
							<input
								id="checkAgree"
								name="checkAgree"
								onChange={handleInput}
								aria-describedby="checkbox-1"
								type="checkbox"
								className="bg-clr-main-dark border-clr-secondary-bright focus:ring-3 focus:ring-clr-secondary-bright ring-clr-secondary-bright accent-clr-main-bright h-4 w-4 rounded"
							/>
							<label
								htmlFor="checkAgree"
								className="text-base ml-1 font-medium text-clr-off-white"
							>
								I agree to the Terms of Use and Privacy Policy
							</label>
						</div>
					</div>
					{/* btn */}
					<div className="flex flex-row items-center space-x-4 pb-10">
						<button className="relative shadow-btn_shadow backdrop-blur-xl bg-clr-main-bright md:px-8 px-4 S-xl:py-3 lg:py-3 md:py-3 py-2 rounded ">
							<span className="flex flex-row items-center justify-center space-x-2  text-clr-main-dark tracking-wider font-medium lg:text-lg md:text-base text-sm">
								<span>Register</span>
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
							</span>
						</button>
					</div>
				</form>
			</div>
			{/* bolb */}
			<div
				id="bolb"
				className="absolute  w-[350px] h-[300px] S-xl:-bottom-[50px] md:-bottom-[100px]  S-xl:left-[150px] md:left-[0px] rounded-full"
			></div>
			{/* end bolb */}
		</div>
	);
}

export default RegisterPage;
