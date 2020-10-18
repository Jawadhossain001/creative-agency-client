import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import upload from '../../../images/icons/upload.png';
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import './Orders.css'

const Orders = () => {
    document.title = "Dashboard | Orders";
    const { user } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = user;

    const { _id } = useParams();
    const [selectedService, setSelectedService] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/home/services")
            .then((res) => res.json())
            .then((data) => setSelectedService(data.find((item) => item._id === _id)));
    }, []);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:4000/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((success) => console.log(success))
            .catch((error) => console.log(error));
    };

    console.log(loggedInUser);

    return (
        <div className="dashboard-wrapper d-flex">
            <Sidebar />
            <div className="dashboard-data w-75">
                <header className="d-flex align-items-center justify-content-between p-4 ">
                    <h4>Orders</h4>
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
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your name / company’s name"
                                ref={register({ required: true })}
                            />
                            {errors.name && <span className="text-danger">Valid name is required</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your email address"
                                ref={register({ required: true })}
                            />
                            {errors.email && <span className="text-danger">Valid email is required</span>}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Graphic Design"
                                defaultValue={selectedService ? selectedService.title : "Project categry"}
                                ref={register}
                            />
                            {errors.title && <span className="text-danger">Valid title is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea
                                name="description"
                                className="form-control"
                                placeholder="Project Details"
                                style={{ height: "112px" }}
                                defaultValue={selectedService ? selectedService.description : "Projects Description"}
                                ref={register}
                            />
                            {errors.description && <span className="text-danger">Valid description is required</span>}
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    placeholder="Price"
                                    ref={register({ required: true })}
                                />
                                {errors.price && <span className="text-danger">Valid price is required</span>}
                            </div>
                            <div className="form-group col-6">
								<input
                                style={{ background: `url(${upload}) no-repeat`, paddingLeft: '30px', backgroundSize: '30px 30px', paddingTop: '15px'}}
									type="file"
									name="projectFile"
									className="form-control"
									placeholder="Upload project file"
									// disabled={true}
								/>
							</div>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Send
						</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Orders;

