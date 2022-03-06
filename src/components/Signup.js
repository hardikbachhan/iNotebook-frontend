import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typed from 'react-typed';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const host = "http://localhost:5000";
        const { name, email, password, cpassword } = credentials;

        if (password !== cpassword) {
            props.showAlert("Invalid Credentials.", "danger");
            setCredentials({ name: "", email: "", password: "", cpassword: "" });
            return
        }

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        // console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            history.push("/");
            props.showAlert("Account created Successfully.", "success");
        } else {
            props.showAlert(json.error, "danger");
            setCredentials({ name: "", email: "", password: "", cpassword: "" });
        }
    }

    const style = {
        "background": "url('https://live.staticflickr.com/1540/25192961495_a422a0f172_b.jpg') no-repeat center center",
        "padding": "0",
        "height": "450px",
        "width": "750px"
    }

    return (
        <div className="container">

            <div className="mb-4" style={{ fontSize: "3rem" }}>
                <Typed
                    strings={['Create an Account to use iNotebook...']}
                    typeSpeed={40}
                    smartBackspace="true"
                    backSpeed={40}
                    loop
                />
            </div>
            <div className="row">
                <div className="col-lg-8" style={style}>
                </div>
                <div className="col-lg-4" style={{ "padding": "15px 0 50px 30px" }}>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={credentials.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                minLength={5}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="cpassword"
                                name="cpassword"
                                value={credentials.cpassword}
                                onChange={handleChange}
                                required
                                minLength={5}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
