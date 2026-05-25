import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;

  return (
    <Fade bottom duration={1200} distance="24px">
      <article
        className="degree-card"
        style={{
          borderColor: theme.borderColor,
          backgroundColor: theme.projectCard,
        }}
      >
        <div
          className="degree-logo-wrap"
          style={{ borderColor: theme.accentColor }}
        >
          <img
            className="degree-logo"
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>

        <div className="degree-content">
          <div
            className="degree-head"
            style={{ borderColor: theme.borderColor }}
          >
            <div>
              <h3 className="card-title" style={{ color: theme.text }}>
                {degree.title}
              </h3>
              <p
                className="card-subtitle"
                style={{ color: theme.secondaryText }}
              >
                {degree.subtitle}
              </p>
            </div>
            <p className="duration" style={{ color: theme.text }}>
              {degree.duration}
            </p>
          </div>

          <div className="body-content">
            {degree.descriptions.map((sentence) => (
              <p
                key={`${degree.title}-${sentence}`}
                className="content-list"
                style={{ color: theme.secondaryText }}
              >
                {sentence.replace("⚡", "")}
              </p>
            ))}

            <a
              className="degree-website-btn"
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: theme.accentColor }}
            >
              Visit Website
            </a>
          </div>
        </div>
      </article>
    </Fade>
  );
}

export default DegreeCard;
