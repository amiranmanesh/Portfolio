import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

const links = [
  {
    key: "gmail",
    icon: "fa-google",
    className: "google",
    href: (v) => `mailto:${v}`,
  },
  { key: "telegram", icon: "fa-telegram", className: "telegram" },
  { key: "linkedin", icon: "fa-linkedin-in", className: "linkedin" },
  { key: "github", icon: "fa-github", className: "github" },
  { key: "gitlab", icon: "fa-gitlab", className: "gitlab" },
  { key: "twitter", icon: "fa-twitter", className: "twitter" },
  { key: "instagram", icon: "fa-instagram", className: "instagram" },
];

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {links.map((link) => {
        const value = socialMediaLinks[link.key];
        if (!value) {
          return null;
        }

        const href = link.href ? link.href(value) : value;

        return (
          <a
            key={link.key}
            href={href}
            className={`icon-button ${link.className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.key}
          >
            <i className={`fab ${link.icon}`}></i>
          </a>
        );
      })}
    </div>
  );
}
