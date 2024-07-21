import React, {useState} from 'react';
import axios from "axios";
import {BaseURL} from "../consistents";
import {useNavigate} from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login_status, setLogin_status] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function usernameHandler(e) {
        setUsername(e.target.value);
    }

    function passwordHandler(e) {
        setPassword(e.target.value);
    }

    function login() {
        if (!username || !password) {
            setLogin_status("Please provide both username and password.");
            return;
        }

        setLoading(true);

        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseURL + '/auth/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setLogin_status("Login Successful!");

                // Delay navigation to show success message
                setTimeout(() => {
                    if (response.data.role === 'admin') {
                        navigate("/home");
                    } else {
                        navigate("/userhome");
                    }
                }, 2000); // 2-second delay
            })
            .catch((error) => {
                console.log(error);
                setLogin_status("Login Failed! Please check your credentials and try again.");
            })
            .finally(() => {
                setLoading(false);  // Reset loading state
            });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Username: <input id="username" type={"text"} value={username} onChange={usernameHandler}/></p>
            <p>Password: <input id="password" type={"password"} value={password} onChange={passwordHandler}/></p>
            <p>
                <button id={"registerbtn"} onClick={() => navigate("/register")}>Register</button>
            </p>
            <p>
                <button id={"loginbtn"} onClick={login} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </p>
            <p id={"login-status"}>{login_status}</p>
        </div>
    );
}

export default Login;
