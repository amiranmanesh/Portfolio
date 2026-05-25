import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={1200} distance="20px">
          <h2 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h2>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => (
          <DegreeCard degree={degree} theme={theme} key={degree.title} />
        ))}
      </div>
    </div>
  );
}

export default Educations;
