import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Orders from "./components/Dashboard/Orders/Orders";
import Review from "./components/Dashboard/Review/Review";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import ServiceListAdmin from "./components/Dashboard/ServiceListAdmin/ServiceListAdmin";
import NotMatch from "./components/NotMatch/NotMatch";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute exact path="/dashboard">
						<Dashboard></Dashboard>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/orders">
						<Orders></Orders>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/orders/:_id">
						<Orders></Orders>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/service-list">
						<ServiceList></ServiceList>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/review">
						<Review></Review>
					</PrivateRoute>
					<PrivateRoute exact path="/dashboard/service-list-admin">
						<ServiceListAdmin></ServiceListAdmin>
					</PrivateRoute>
					<Route path="*">
						<NotMatch />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
