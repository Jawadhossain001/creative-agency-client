import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Animation from "../../Animation/Animation";
import Sidebar from "../Sidebar/Sidebar";

const ServiceListAdmin = () => {
	document.title = "Dashboard | Admin";
	const { user } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user;

	const [loading, setLoading] = useState(true);
	const [serviceList, setServiceList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000/admin/serviceList")
			.then((res) => res.json())
			.then((data) => {
				setServiceList(data);
				setLoading(false);
			});
	}, []);

	return (
		<div className="dashboard-wrapper d-flex" style={{ minHeight: "100vh", height: "auto" }}>
			<Sidebar />
			<div className="dashboard-data w-75 h-100">
				<header className="d-flex align-items-center justify-content-between p-4 ">
					<h4>Service List Admin</h4>
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
					{loading ? (
						<Animation />
					) : (
						<div className="service-list-admin admin-content">
							<table>
								<thead>
									<tr>
										<th className="name">Name</th>
										<th className="email">Email ID</th>
										<th className="title">Service</th>
										<th className="description">Poject Details</th>
										<th className="status">Status</th>
									</tr>
								</thead>
								<tbody>
									{serviceList.map((service) => (
										<tr key={service._id}>
											<td className="name">{service.name}</td>
											<td className="email">{service.email}</td>
											<td className="title">{service.title}</td>
											<td className="description">{service.description}</td>
											<td className="status">
												<select className="status-change" name="status">
													<option value="pending">Pending</option>
													<option value="done">Done</option>
												</select>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</main>
			</div>
		</div>
	);
};

export default ServiceListAdmin;
