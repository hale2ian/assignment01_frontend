import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseURL} from "../consistents";

function Course() {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: BaseURL + '/loginapp/course',
            headers: {
                'Authorization': 'Token 040cf3f369beec7c2f980b967be6b021ba5537b5'
            }
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setCourse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1>Course Page</h1>
            <ul>
                {course.map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Course;