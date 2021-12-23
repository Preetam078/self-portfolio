import React from "react";
import "./Main.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Picture from "../../image/HeaderPic.png";
function Main() {
  return (
    <div className="main">
      <div className="devHandles">
        <div className="icons">
          <LinkedInIcon className="icon" style={{ padding: "0.1em" }} />
          <FacebookIcon className="icon" style={{ padding: "0.1em" }} />
          <InstagramIcon className="icon" style={{ padding: "0.1em" }} />
          <TwitterIcon className="icon" style={{ padding: "0.1em" }} />
        </div>
      </div>
      <div className="devInfo">
        <div className="Intro">
          <div>
            <p>Hello I'm</p>
            <h1>Preetam Mondal</h1>
          </div>
          <div>
            <h2 className="desc">
              I design and develop services for customers of all sizes, have
              handsome proficiency in creating modern websites and web services
              on demand.
            </h2>
          </div>
        </div>
        <div className="IntroPic">
          <img className="Image" src={Picture} alt="Headerpic" />
          <h1>I Code Imaginations!</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;