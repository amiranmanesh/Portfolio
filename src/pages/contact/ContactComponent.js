import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;
  const showResumeLink =
    greeting.resumeLink && !greeting.resumeLink.includes("drive.google.com");

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <section className="basic-contact">
        <Fade bottom duration={1000} distance="30px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData.profile_image_path}`)}
                alt={greeting.full_name}
              />
            </div>

            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData.title}
              </h1>
              <p
                className="contact-header-detail-text"
                style={{ color: theme.secondaryText }}
              >
                {ContactData.description}
              </p>

              <div
                className="contact-links"
                style={{ color: theme.secondaryText }}
              >
                <a href="mailto:iranmanesh.ah@gmail.com">
                  iranmanesh.ah@gmail.com
                </a>
                <span className="contact-dot">·</span>
                <a href="tel:+989399439483">+98 939 943 9483</a>
                <span className="contact-dot">·</span>
                <a
                  href="https://amiranmanesh.ir"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  amiranmanesh.ir
                </a>
              </div>

              <SocialMedia />

              {showResumeLink && (
                <a
                  className="contact-resume-btn"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
        </Fade>
      </section>

      <Footer theme={props.theme} />
    </div>
  );
}

export default Contact;
