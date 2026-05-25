import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const highlights = ["7+ Years", "15+ Engineers Led", "Fintech + Blockchain"];
  const showResumeLink =
    greeting.resumeLink && !greeting.resumeLink.includes("drive.google.com");

  return (
    <Fade bottom duration={1200} distance="32px">
      <section className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <span
              className="greeting-kicker"
              style={{ color: theme.accentColor }}
            >
              Engineering Leadership Portfolio
            </span>
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title2}
              <span
                className="greeting-name-dot"
                style={{ color: theme.accentColor }}
              >
                .
              </span>
            </h1>
            <p
              className="greeting-text-p"
              style={{ color: theme.secondaryText }}
            >
              I&apos;m{" "}
              <span style={{ color: theme.text }}>{greeting.full_name}</span>.{" "}
              {greeting.subTitle}
            </p>

            <ul className="hero-highlights">
              {highlights.map((item) => (
                <li
                  key={item}
                  style={{ borderColor: theme.borderColor, color: theme.text }}
                >
                  {item}
                </li>
              ))}
            </ul>

            <SocialMedia />

            <div className="portfolio-repo-btn-div">
              <button
                className="hero-btn hero-btn-primary"
                style={{ backgroundColor: theme.accentColor }}
                onClick={() => history.push("/contact")}
              >
                Start a Conversation
              </button>
              {showResumeLink && (
                <a
                  className="hero-btn hero-btn-secondary"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text, borderColor: theme.borderColor }}
                >
                  View Resume
                </a>
              )}
            </div>
          </div>

          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </section>
    </Fade>
  );
}
