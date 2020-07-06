import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image="logo192.png"
        title="TwitterBot"
        category="Bot"
      />
      <Thumbnail
        link="/parrot"
        image="logo192.png"
        title="ParrotBot"
        category="Bot"
      />
      <Thumbnail
        link="/sentinel"
        image="logo192.png"
        title="SentinelBot"
        category="Bot"
      />
    </div>
  );
}

export default Projects;
