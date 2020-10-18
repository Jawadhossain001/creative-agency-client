import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<Link to={`/dashboard/orders/${service._id}`}>
				<div className="service-card p-4 ">
					<img
						// src={require(`../../../images/icons/${service.image}`)}
						src={service.image}
						alt={service.title}
						style={{ maxWidth: "74px" }}
					/>
					<h3 className="card-title pt-4">{service.title}</h3>
					<p className="card-txt px-xl-2">{service.description}</p>
				</div>
			</Link>
		</div>
	);
};
export default ServiceDetails;

