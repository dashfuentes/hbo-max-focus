import React, { FC, useState } from "react";
//import useButtonStyles from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../../assets/logo-hbo-max.jpg";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
} from "formik";

interface MyFormValues {
	email?: string;
	password?: string;
}

const Login: FC<MyFormValues> = ({}) => {
	// const useStyles = useButtonStyles();
	const initialValues: MyFormValues = { email: "", password: "" };
	const [error, setError] = useState<String>("");
	const navigate = useNavigate();
	const getTokenAccess = (values: any) => {
		console.log(values);
		const { email, password } = values;
		axios
			.post("https://reqres.in/api/login", {
				email: email,
				password: password,
			})
			.then(function (response) {
				console.log(response);
				if (response.status == 200) {
					console.log("success");
					var data = response.data;
					var token = data.token;
					console.log(token);
					//saving the token to the localStorage
					localStorage.setItem("token", token);
					//redirect to the home screen
					//navigate("/home");
				}
			})
			.catch(function (error) {
				//Setting error message to the error state
				setError("Invalid credentials!!");
				console.log("Something went wrong!!", error);
			});
	};

	return (
		<section className="h-full bg-gradient-to-r from-purple-300 to-blue-200 md:h-screen">
			<div className="container py-12 px-6 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="xl:w-10/12">
						<div className="block bg-white shadow-lg rounded-lg">
							<div className="lg:flex lg:flex-wrap g-0">
								<div className="lg:w-6/12 px-4 md:px-0">
									<div className="md:p-12 md:mx-6">
										<div className="text-center">
											<img className="mx-auto w-48" src={logo} alt="logo" />
											<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
												Sign In
											</h4>
										</div>
										<Formik
											initialValues={initialValues}
											onSubmit={async (values) => {
												console.log(values);
												const isEmptyInput = Object.values(values).every(
													(value) => {
														// 👇️ check for empty properties
														if (value === "") {
															return true;
														}
														return false;
													}
												);

												console.log("searching nulls", isEmptyInput);
												if (isEmptyInput)
													return setError("You must provide email/password");

												await getTokenAccess(values);
											}}
										>
											<Form>
												<p className="mb-4">Please login to your account</p>
												<div className="mb-4">
													<Field
														type="text"
														name="email"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="email"
														placeholder="Email"
													/>
												</div>
												<div className="mb-4">
													<Field
														type="password"
														name="password"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="password"
														placeholder="Password"
													/>
												</div>
												<div className="text-center pt-1 mb-12 pb-1">
													<button
														className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-purple-300 to-blue-200"
														type="submit"
														data-mdb-ripple="true"
														data-mdb-ripple-color="light"
													>
														Log in
													</button>
												</div>
												<p className="mt-2 text-sm text-red-600 dark:text-red-500">
													<span className="font-medium">{error}</span>
												</p>
											</Form>
										</Formik>
									</div>
								</div>
								<div className="lg:w-6/12 flex bg-gradient-to-r from-purple-300 to-blue-200 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
									<div className="text-white px-4 py-6 md:p-12 md:mx-6">
										<h4 className="text-xl font-semibold mb-6">
											We are more than just a company
										</h4>
										<p className="text-sm">
											Say hello to HBO Max, the streaming platform that bundles
											all of HBO together with even more of your favorite movies
											and TV series, plus new Max Originals.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
