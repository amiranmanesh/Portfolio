import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiAmazonaws,
  SiAndroid,
  SiApachekafka,
  SiBlockchaindotcom,
  SiDocker,
  SiElastic,
  SiEthereum,
  SiGit,
  SiGo,
  SiGrafana,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiNatsdotio,
  SiPhp,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiRedis,
  SiRust,
  SiStellar,
  SiTypescript,
} from "react-icons/si";

const skillIcons = {
  "simple-icons:amazonaws": SiAmazonaws,
  "simple-icons:android": SiAndroid,
  "simple-icons:apachekafka": SiApachekafka,
  "simple-icons:blockchaindotcom": SiBlockchaindotcom,
  "simple-icons:docker": SiDocker,
  "simple-icons:elastic": SiElastic,
  "simple-icons:ethereum": SiEthereum,
  "simple-icons:git": SiGit,
  "simple-icons:go": SiGo,
  "simple-icons:grafana": SiGrafana,
  "simple-icons:kotlin": SiKotlin,
  "simple-icons:kubernetes": SiKubernetes,
  "simple-icons:mongodb": SiMongodb,
  "simple-icons:natsdotio": SiNatsdotio,
  "simple-icons:php": SiPhp,
  "simple-icons:postgresql": SiPostgresql,
  "simple-icons:prometheus": SiPrometheus,
  "simple-icons:python": SiPython,
  "simple-icons:rabbitmq": SiRabbitmq,
  "simple-icons:redis": SiRedis,
  "simple-icons:rust": SiRust,
  "simple-icons:stellar": SiStellar,
  "simple-icons:typescript": SiTypescript,
};

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            const SkillIcon = skillIcons[logo.fontAwesomeClassname];

            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {SkillIcon ? (
                    <SkillIcon style={logo.style} />
                  ) : (
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
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

export default SoftwareSkill;
