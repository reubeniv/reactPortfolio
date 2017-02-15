/**
 * Created by Shaun on 16/02/2017.
 */
import React from 'react';

const about = "Full stack web developer and systems engineer with solid agile experience. " +
    "Studied Software Engineering at Aberystwyth University; specialising in Java and C++, web development, "+
    "machine learning, and computer graphics. Enjoys volunteering to help children learn to code and served "+
    "for two years as an army reservist.";

const AboutMe = () =>{
    return(
        <div className="centre-text">
            <h1>About Me</h1>
            <p>{about}</p>
        </div>
    );
};

export default AboutMe;