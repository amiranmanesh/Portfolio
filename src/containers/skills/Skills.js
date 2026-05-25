import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <section className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={1200} distance="20px">
          <h2 className="skills-header" style={{ color: theme.text }}>
            Technical Strengths
          </h2>
          <p
            className="skills-header-subtitle"
            style={{ color: theme.secondaryText }}
          >
            Distributed systems, secure infrastructure, and product-focused
            engineering execution.
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </section>
  );
}
