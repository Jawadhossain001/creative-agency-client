import React from "react";
import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

const Projects = () => {
	const projectData = [
		{
			img: carousel2,
		},
		{
			img: carousel3,
		},
		{
			img: carousel4,
		},
		{
			img: carousel5,
		},
		{
			img: carousel1,
		},
	];

	const settings = {
		dots: true,
		arrows: false,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 2,
		slidesToScroll: 1,
		pauseOnHover: true,
		infinite: true,
		centerMode: true,
		centerPadding: "150px",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					centerPadding: "80px",
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				},
			},
		],
	};

	return (
		<section className="projects py-5">
			<h4 className="section-title text-white text-center pt-xl-5">
				Here are some of <span className="brand-green">our works</span>
			</h4>
			<div className="py-xl-5 py-2">
				<Slider {...settings} className="pt-3 pb-5">
					{projectData.map((project) => (
						<div className="project-slide img-fluid" key={Math.random()}>
							<img src={project.img} />
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Projects;
