import React from "react";
import "./Details.css";
import Sidebar from "./SideList";

const AwarenessCampaign = () => {
  return (
    <div id="awareness-campaign">
      <div className="awareness-hero">
        <h1>Awareness Campaigns</h1>
      </div>
      <div className="details">
        <div className="details-text container">
          <div>
            <h2>Community Workshops and Seminars</h2>
            <p>
              Our community workshops and seminars educate youth and families
              about the dangers of drug abuse and crime. Through engaging
              activities and expert panels, we provide essential knowledge on
              how to recognize and avoid risky behaviors.
            </p>
            <p>
              Workshops are interactive and allow participants to share their
              thoughts and experiences, creating a collaborative environment for
              learning and awareness.
            </p>
          </div>
          <div>
            <h2>Digital Outreach</h2>
            <p>
              We leverage social media platforms to reach a broader audience,
              especially youth. Platforms like Instagram and TikTok are used to
              share impactful stories, videos, and awareness campaigns.
            </p>
            <p>
              This ensures that the message reaches young people in their
              digital spaces, making the campaign relevant and relatable to
              modern lifestyles.
            </p>
          </div>
          <div>
            <h2>Community Partnerships</h2>
            <p>
              Collaborating with local leaders and organizations strengthens our
              outreach, ensuring resources are pooled for maximum impact.
            </p>
            <p>
              These partnerships also help us customize our programs to the
              specific needs of communities, ensuring relevance and
              effectiveness.
            </p>
          </div>
        </div>

        <div className="details-list">
        <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default AwarenessCampaign;
