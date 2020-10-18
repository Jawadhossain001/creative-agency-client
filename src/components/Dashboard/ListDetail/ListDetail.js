import React from "react";
import service5 from "../../../images/icons/service5.png";

const ListDetail = ({ list }) => {
		return (
			<div className="col-lg-5 my-lg-0 my-3">
				<div className="service-list-card">
					<div className="d-flex align-items-center">
						{list.img ? (
							<img src={list.img} alt="service icon" />
						) : (
							<img src={service5} alt="default icon" />
						)}
						<button className="btn btn-secondary btn-sm">Pending</button>
					</div>
					<div className="mt-2">
						<h4>{list.title}</h4>
						<p>{list.description}</p>
					</div>
				</div>
			</div>
		);
    };
    
export default ListDetail