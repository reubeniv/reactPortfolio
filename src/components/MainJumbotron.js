import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaLinkedin  from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGithub from 'react-icons/lib/fa/github';

const MainJumbotron = () => {
    return (
        <Jumbotron className="centre-text">
            <h1>Shaun Munsey</h1>
            <p>Full-Stack Web Developer</p>
            <a href="mailto:s_munsey@live.com"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/smunsey" target="_blank"><FaLinkedin /></a>
            <a href="https://www.twitter.com/s_munsey" target="_blank"><FaTwitter /></a>
            <a href="https://github.com/reubeniv" target="_blank"><FaGithub /></a>
        </Jumbotron>
    );
};

export default MainJumbotron