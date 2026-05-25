import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;

  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <section className="basic-experience">
        <Fade bottom duration={1200} distance="30px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>

            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h2
                className="experience-heading-sub-text"
                style={{ color: theme.secondaryText }}
              >
                {experience.subtitle}
              </h2>
              <p
                className="experience-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <ExperienceAccordion sections={experience.sections} theme={theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Experience;
