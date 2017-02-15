/**
 * Created by Shaun on 16/02/2017.
 */
import React from 'react';
import cv from './cv.json';

const Education = () =>{
    return (
        <div className="centre-text">
            <h2>Education</h2>
            <h4>{cv.education.university}</h4>
            <h5>{cv.education.degree}</h5>
            <h6>{cv.education.dates}</h6>
            {cv.education.courses.map((course) =>
                <p className="education-courses">{course}</p>)}
        </div>
    );
};

export default Education;
