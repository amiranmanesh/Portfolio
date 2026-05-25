import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiAndroid,
  SiFirebase,
  SiGo,
  SiKotlin,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiStellar,
} from "react-icons/si";

const projectLanguageIcons = {
  "logos-android": SiAndroid,
  "logos-firebase": SiFirebase,
  "logos-go": SiGo,
  "logos-kotlin": SiKotlin,
  "logos-nodejs": SiNodedotjs,
  "logos-postgresql": SiPostgresql,
  "logos-rabbitmq": SiRabbitmq,
  "logos-redis": SiRedis,
  "logos-stellar": SiStellar,
};

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => {
            const LanguageIcon = projectLanguageIcons[logo.iconifyClass];

            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  name={logo.name}
                >
                  {LanguageIcon ? (
                    <LanguageIcon />
                  ) : (
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClass}
                      data-inline="false"
                    ></span>
                  )}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
