// src/components/Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../consistents';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password || !firstName || !lastName || !dateOfBirth) {
            setRegisterStatus('Please provide all fields for successful registration!');
            return;
        }

        let data = JSON.stringify({
            "username": username,
            "email": email,
            "password": password,
            "first_name": firstName,
            "last_name": lastName
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseURL + '/auth/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then(response => {
                console.log(response.data);
                setRegisterStatus('Registration Successful!');
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.username) {
                    setRegisterStatus('Username is already taken!');
                } else {
                    setRegisterStatus('Registration Failed!');
                }
            });
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Date of Birth: </label>
                    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>{registerStatus}</p>
        </div>
    );
}

export default Register;
