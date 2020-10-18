import React from "react";
import "./HeaderMain.css";
import frame from "../../../images/logos/frame.png";
import NavMenu from "../../Shared/NavMenu/NavMenu";

const HeaderMain = () => {
	return (
		<section className="hero-section pt-4">
			<div className="container">
				<NavMenu />
				<div className="hero-content pt-5">
					<div className="row align-items-center">
						<div className="col-lg-5">
							<div className="hero-txt text-left pr-xl-5">
								<h2>Let’s Grow Your Brand To The Next Level</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis
									laoreet maecenas. Feugiat{" "}
								</p>
								<button className="btn btn-dark">Hire Us</button>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-thumb">
								<img src={frame} alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderMain;
