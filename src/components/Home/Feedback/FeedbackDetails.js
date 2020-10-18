import React from "react";

const FeedbackDetails = ({ testimonial }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="testimonial-card py-4 my-3">
				<div>
					{testimonial.img ? (
						<img src={testimonial.img} alt={testimonial.name} style={{ maxWidth: "64px" }} />
					) : (
						<i className="fas fa-users"></i>
					)}
					<div>
						<h3 className="card-title mb-1">{testimonial.name}</h3>
						<h5 className="card-subtitle">{testimonial.designation}</h5>
					</div>
				</div>
				<p className="card-txt m-0">{testimonial.message}</p>
			</div>
		</div>
	);
};

export default FeedbackDetails;
