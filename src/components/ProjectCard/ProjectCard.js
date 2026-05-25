import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo, theme }) {
  const hasUrl = Boolean(repo.url);

  function openRepoinNewTab(url) {
    if (!url) {
      return;
    }

    const win = window.open(url, "_blank");
    if (win) {
      win.focus();
    }
  }

  function handleKeyDown(event) {
    if (!hasUrl) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRepoinNewTab(repo.url);
    }
  }

  return (
    <Fade bottom duration={1200} distance="24px">
      <article
        className={`project-card ${hasUrl ? "project-card-clickable" : ""}`}
        onClick={() => openRepoinNewTab(repo.url)}
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: theme.projectCard,
          borderColor: theme.borderColor,
        }}
        tabIndex={hasUrl ? 0 : -1}
        role={hasUrl ? "button" : "article"}
      >
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>

        <p className="repo-description" style={{ color: theme.secondaryText }}>
          {repo.description}
        </p>

        <div className="repo-details">
          <ProjectLanguages logos={repo.languages} />
        </div>
      </article>
    </Fade>
  );
}
