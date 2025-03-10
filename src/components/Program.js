import React, {useEffect, useState} from 'react';
import {BaseURL} from "../consistents";
import axios from "axios";

function Program() {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseURL + '/loginapp/program',
            headers: {
                'Authorization': 'Token 040cf3f369beec7c2f980b967be6b021ba5537b5'
            }
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPrograms(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>Program Page</h1>
            <ul>
                {programs.map((program) => (
                    <li key={program.id}>{program.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Program;