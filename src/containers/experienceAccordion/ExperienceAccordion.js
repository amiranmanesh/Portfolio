import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <section className="experience-accord">
      {props.sections.map((section) => (
        <article className="experience-group" key={section.title}>
          <div className="experience-group-header">
            <h3
              className="experience-group-title"
              style={{ color: theme.text }}
            >
              {section.title}
            </h3>
            <span
              className="experience-group-count"
              style={{ color: theme.secondaryText }}
            >
              {section.experiences.length} role
              {section.experiences.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="experience-group-body">
            {section.experiences.map((experienceItem, index) => (
              <ExperienceCard
                key={`${section.title}-${experienceItem.title}-${index}`}
                experience={experienceItem}
                theme={theme}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default ExperienceAccordion;
