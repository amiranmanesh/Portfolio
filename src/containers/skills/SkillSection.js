import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg") {
    return <FullStackImg theme={props.theme} />;
  }

  if (props.fileName === "CloudInfraImg") {
    return <CloudInfraImg theme={props.theme} />;
  }

  return null;
}

function SkillSection(props) {
  const theme = props.theme;

  return (
    <div className="skills-grid">
      {skills.data.map((skill, index) => (
        <Fade
          key={skill.title}
          bottom
          duration={1300 + index * 150}
          distance="20px"
        >
          <article
            className="skill-card"
            style={{
              backgroundColor: theme.projectCard,
              borderColor: theme.borderColor,
            }}
          >
            <div className="skill-card-head">
              <div className="skill-card-visual">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
              <h3 className="skills-heading" style={{ color: theme.text }}>
                {skill.title}
              </h3>
            </div>

            <SoftwareSkill logos={skill.softwareSkills} />

            <ul className="skill-points">
              {skill.skills.map((skillSentence) => (
                <li
                  key={`${skill.title}-${skillSentence}`}
                  className="skills-text"
                  style={{ color: theme.secondaryText }}
                >
                  {skillSentence.replace("⚡", "")}
                </li>
              ))}
            </ul>
          </article>
        </Fade>
      ))}
    </div>
  );
}

export default SkillSection;
