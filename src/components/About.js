import React, { useEffect, useState } from "react";
import Photo from "../assets/agalar.jpg";
import "../index.css";
const About = () => { 

    return(
        <body>
            <div className="about">
            <h1>4 GENIUS </h1>
            <img src={Photo} alt="about" width={650}  />   
            </div>
        </body>

    );
}
export default About;