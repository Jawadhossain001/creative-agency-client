import React from "react";
import "./Clients.css";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const Clients = () => {
	const ClientData = [
		{
			name: "slack",
			img: slack,
		},
		{
			name: "google",
			img: google,
		},
		{
			name: "uber",
			img: uber,
		},
		{
			name: "netflix",
			img: netflix,
		},
		{
			name: "airbnb",
			img: airbnb,
		},
	];

	return (
		<section className="row d-flex align-items-center justify-content-center">
			<div className="container">
				<div className="Client-content pt-xl-4">
					{ClientData.map((brand) => (
						<img className="img-fluid" src={brand.img} alt={brand.name} key={brand.name} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
