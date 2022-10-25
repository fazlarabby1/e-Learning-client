import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1 className='fs-3 text-danger'>Courses List</h1>
            {
                courses.map(course => <p key={course.id}><Link to='/coursedetails'>{course.course_name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideMenu;