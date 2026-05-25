import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <section className="basic-projects">
        <Fade bottom duration={1200} distance="30px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>

            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <section className="repo-cards-div-main">
        {projects.data.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </section>

      <a
        className="projects-more-btn"
        href="https://github.com/amiranmanesh"
        target="_blank"
        rel="noopener noreferrer"
        style={{ backgroundColor: theme.accentColor }}
      >
        More Projects on GitHub
      </a>

      <Footer theme={props.theme} />
    </div>
  );
}

export default Projects;
