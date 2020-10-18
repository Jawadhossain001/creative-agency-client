import React from "react";
import Clients from "../Clients/Clients";
import Footer from "../../Shared/Footer/Footer";
import HeaderMain from "../HeaderMain/HeaderMain";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Feedback from "../Feedback/Feedback";

const Home = () => {
	return (
		<>
			<HeaderMain />
			<Clients />
			<Services />
			<Projects />
			<Feedback />
			<Footer />
		</>
	);
};

export default Home;
