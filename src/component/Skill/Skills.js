import React from "react";
import "./Skills.css";
import CSS from "../../image/CSS.png";
import HTML from "../../image/HTML.png";
import JS from "../../image/JS.png";
import REACT from "../../image/REACT.png";
import TAILWIND from "../../image/TAILWIND.png";
import NEXT from "../../image/NEXT.png";
import TYPESCRIPT from "../../image/Typescript.png";
import Django from "../../image/django.png";
import Nodejs from "../../image/nodejs.png";
import Express from "../../image/express.png";
import MongoDb from "../../image/mongodb.png";
import Nest from "../../image/nestjs.png";
import Nginx from "../../image/nginx.png";
import Docker from "../../image/docker.png";
import Bounce from "react-reveal/Bounce";
function Skills() {
  return (
    <div className="skills">
      <div className="heading">
        <h1>Tech Stack I Know And Have Worked On. </h1>
      </div>
      <div className="skillSet">
        <div className="frontend">
          <h2>Frontend Skills</h2>
          <div className="logo__image">
            <Bounce bottom cascade>
              <img src={CSS} alt="" />
              <img src={HTML} alt="" />
              <img src={JS} alt="" />
              <img src={REACT} alt="" />
              <img src={TAILWIND} alt="" />
              <img src={NEXT} alt="" />
              <img src={TYPESCRIPT} alt="" />
            </Bounce>
          </div>
        </div>
        <div className="backend">
          <h2>Backend Skills</h2>
          <div className="logo__image">
            <Bounce top cascade>
              <img src={Nodejs} alt="" />
              <img src={Express} alt="" />
              <img src={MongoDb} alt="" />
              <img src={Nest} alt="" />
              <img src={Django} alt="" />
              <img
                src={Docker}
                alt=""
                style={{ width: "14vw", margin: "15px 1px" }}
              />
              <img src={Nginx} alt="" />
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
