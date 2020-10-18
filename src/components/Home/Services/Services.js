import React, { useEffect, useState } from "react";
import "./Services.css";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
	const serviceData = [
		{
			image: service1,
			title: "Web & Mobile design",
			description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
		},
		{
			image: service2,
			title: "Graphic design",
			description:
				"We craft stunning and amazing web UI, using a well drafted UX to fit your product.",
		},
		{
			image: service3,
			title: "Web development",
			description:
				"We craft stunning and amazing web UI, using a well drafted UX to fit your product.",
		},
	];

	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:4000/home/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<section className="services py-5">
			<div className="container text-center py-xl-3">
				<h4 className="section-title">
					Provide awesome <span className="brand-green">services</span>
				</h4>
				<div className="services-content pt-5">
					<div className="row">
						{/* {serviceData.map((service) => (
							<ServiceDetails service={service} key={Math.random()}></ServiceDetails>
						))} */}
						{services.map((service) => (
							<ServiceDetails service={service} key={service._id}></ServiceDetails>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
