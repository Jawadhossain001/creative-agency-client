import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
	document.title = "CA | Dashboard";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	return (
		<div className="dashboard-wrapper d-flex">
			<Sidebar />
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Dashboard</h4>
					{loggedInUser.email ? (
						<div>
							<img src={loggedInUser.photoURL} alt="" />
							<span>{loggedInUser.name.split(" ").slice(0, 1)}</span>
						</div>
					) : (
						<div>
							<i className="fas fa-user"></i>
							<span>User</span>
						</div>
					)}
				</header>
				<main className="p-5">
					<div className="row">
						{!loggedInUser.email && <div className="alert alert-warning">No data found! Please Login</div>}
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
