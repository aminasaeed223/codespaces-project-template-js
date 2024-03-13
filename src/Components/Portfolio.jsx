/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ai.jpg";

const imageAltText = "simple background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Pale-Blue-Dot-Visualization-Challenge",
    description:
      "Contributed in a project utilizing Python, Plotly, Tableau, and Power BI to create interactive visualizations and dashboards showcasing the prevalence of undernourishment worldwide. The visuals aim to inform decisions and actions towards addressing undernourishment and achieving the goal of Zero Hunger (SDG 2).",
    url: "https://github.com/aminasaeed223/Pale-Blue-Dot-Visualization-Challenge",
  },
  {
    title: "VoiceSync",
    description:
      "Voice Sync is a collaborative hackathon project showcasing real-time voice to customized text synchronization, highlighting my teamwork and problem-solving skills. It demonstrates our ability to create innovative solutions in audio processing within a limited timeframe.",
    url: "https://devpost.com/software/voicesync",
  
  },
  {
    title: "PharmCare",
    description:
      "PharmCare is an innovative project aimed at revolutionizing the healthcare industry by integrating advanced technologies like chatbot and predictive analysis. In this collaborative endeavor, we work together to enhance the capabilities of the existing system.",
    url: "https://lablab.ai/event/leap-2024-hackathon/pharmacy-management/pharmacode",
  },
  {
    title: "Vrinda Store Data Analysis",
    description:
      "Analyzed sales data and customer trends to optimize operations and drive business growth for VRinda Store",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Article: Google Summer of Code",
    description:
      "Wrote a comprehensive analysis of the Google Summer of Code program, its significance in fostering open-source development, and the invaluable experiences gained by student participants.",
    url: "https://medium.com/@femcodesofficial/google-summer-of-code-2024-insights-and-tips-from-alumni-df17cfc9f285",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
