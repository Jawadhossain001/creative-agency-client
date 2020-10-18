import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import google from "../../../images/icons/google.png";
import logo from "../../../images/logos/logo.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import './Login.css'
import { UserContext } from "../../../App";

const Login = () => {
	document.title = "CA | Login";

	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/dashboard/orders" } };

	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const newUser = {
					name: displayName,
					email,
					photoURL,
				};
				console.log(result.user);
				setLoggedInUser(newUser);
				storeAuthToken();
				history.replace(from);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(true)
			.then(function (idToken) {
				sessionStorage.setItem("token", idToken);
				history.replace(from);
			})
			.catch(function (error) {

			});
	};

	return (
		// <div className="container py-5 my-xl-5">
		// 	<div className="logo text-center">
		// 		<Link to="/">
		// 			<img src={logo} alt="site logo" style={{ maxWidth: "150px" }} />
		// 		</Link>
		// 	</div>
		// 	<div className="d-flex align-items-center justify-content-center pb-5 my-5">
		// 		<div className="login-register login p-md-5 p-3">
		// 			<h4 className="mb-5">Login With</h4>
		// 			<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
		// 				<img src={google} alt="" style={{ maxWidth: "28px" }} />
		// 				Continue with Google
		// 			</button>
		// 			<h5 className="mt-3">
		// 				<span>Don’t have an account?</span>
		// 				<Link to="/login">Create an account</Link>
		// 			</h5>
		// 		</div>


				<div>
					<div className='mt-5 pt-5' style={{ width: '150px', margin: 'auto' }}>
						<Link to='/'><img style={{ height: '50px' }} src={logo} alt="" /></Link>
					</div>
					<div className='mt-5 login-form-container' >
						<h3 className='text-center' style={{ fontSize: '24px', fontWeight: 'bold' }}>
							Login with
                		</h3>
						<div
							onClick={handleGoogleSignIn} 
							className=' d-flex google-flex'>
							<img style={{ width: '30px', height: '30px' }} src={google} alt="" />
							<p className='ml-5'>Continue with Google</p>
						</div>
					</div>
				</div>
		// 	</div>
		// </div>
	);
};

export default Login;