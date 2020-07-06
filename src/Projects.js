import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";
import styled from "styled-components";

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

function Projects(props) {
  return (
    // Render a Thumbnail component
    <>
      <h1>Projects</h1>
      <ProjectList>
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
      </ProjectList>
    </>
  );
}

export default Projects;
