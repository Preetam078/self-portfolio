import React from "react";
import "./About.css";
import Photo from "../../image/About.png";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Bounce from "react-reveal/Bounce";
function About() {
  return (
    <div className="about">
      <div className="about__pic">
        <div className="about__pic__container">
          <img src={Photo} alt="photo" />
        </div>
      </div>
      <div className="about__para">
        <Bounce top>
          <h1>Know Me More...</h1>
          <div className="about__para__desc">
            <p>
              I am <span>Preetam Mondal</span>, a fullstack developer, worked on
              different MERN projects in the past Couple of Months and have an
              Hands on experience in the Web Technology from Production till
              Deployment. The Things that keep me motivated is my Spirit of
              TeamWork and Enthusiasmic Learning nature.
            </p>
          </div>
          <div className="about__para__button">
            <div className="button">
              Download CV
              <InsertDriveFileIcon />
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default About;
