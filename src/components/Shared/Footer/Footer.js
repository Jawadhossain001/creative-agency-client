import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer-contact pt-5">
			<div className="container pt-2 pb-5">
				<div className="row">
					<div className="col-lg-6">
						<h4 className="title mb-3">Let us handle your project, professionally.</h4>
						<p className="description description pr-xl-5 mr-xl-5">
							With well written codes, we build amazing apps for all platforms, mobile and web apps in
							general.
						</p>
					</div>
					<div className="col-lg-6">
						<div className="contact-form mt-lg-0 mt-3">
							<div className="form-group">
								<input
									type="email"
									name="email"
									className="form-control"
									placeholder="Your email address"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="name"
									className="form-control"
									placeholder="Your name / company’s name"
								/>
							</div>
							<div className="form-group">
								<textarea name="message" className="form-control" placeholder="Your message"></textarea>
							</div>
							<button className="btn btn-dark">Send</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="copyright text-center">
					<p className="m-0 py-5 pb-4">
					<p>Copyright Jawad's labs {(new Date()).getFullYear()}</p>			
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
