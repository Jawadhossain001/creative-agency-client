import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Animation from "../../Animation/Animation";
import ListDetail from "../ListDetail/ListDetail";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
	document.title = "Dashboard | Service List";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;
	const [serviceList, setServiceList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:4000/serviceList?email=${loggedInUser.email}`)
			.then((res) => res.json())
			.then((data) => {
				setServiceList([...data]);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	console.log(serviceList);

	return (
		<div className="dashboard-wrapper d-flex">
			<Sidebar />
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Service List</h4>
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
					<div className="service-list container-fluid px-0">
						<div className="row">
							{loading ? (
								<Animation></Animation>
							) : serviceList.length ? (
								serviceList.map((list) => <ListDetail list={list}></ListDetail>)
							) : (
								<div className="alert alert-warning">No data found! Please Login</div>
							)}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default ServiceList;
