import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let history = useHistory();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const host = "http://localhost:5000";

        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            props.showAlert("Logged in successfully.", "success");
            history.push("/");
        } else {
            props.showAlert(json.error, "danger");
        }
    }

    const style = {
        "background": "url('https://images.ctfassets.net/lzny33ho1g45/66zDmwVz2N4aN4k589RRjB/36f5339cd45ed61b6560292a696e91d5/notes?w=1400') no-repeat center center",
        "padding": "0",
        "height": "auto",
        "width": "60%"
    }

    return (
        <div className="container">

            <h2 className="mb-4">Login to continue to iNotebook</h2>
            <div className="row">
                <div className="col-sm-12 col-md-8" style={style}>
                </div>
                <div className="col-sm-12 col-md-4" style={{ "padding": "80px 0 50px 30px" }}>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login