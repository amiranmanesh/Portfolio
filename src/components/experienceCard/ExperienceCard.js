import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;

  return (
    <div
      className="experience-card"
      style={{
        borderColor: experience.color || theme.accentColor,
        backgroundColor: theme.projectCard,
      }}
    >
      {experience.logo_path && (
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience.logo_path}`)}
            alt={`${experience.company} logo`}
          />
        </div>
      )}

      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h4 className="experience-card-title" style={{ color: theme.text }}>
              {experience.title}
            </h4>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              {experience.company_url ? (
                <a
                  href={experience.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </p>
          </div>

          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.text }}
            >
              {experience.duration}
            </p>
            {experience.location && (
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience.location}
              </p>
            )}
          </div>
        </div>

        <p
          className="experience-card-description"
          style={{ color: theme.secondaryText }}
        >
          {experience.description}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
