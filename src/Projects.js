import React, { Fragment, useState, useEffect } from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import "./App.css";
import styled from "styled-components";
import axios from "axios";

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`;

function Projects(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/projects");
      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    // Render a Thumbnail component
    <>
      <h1>Projects</h1>
      <ProjectList>
        {data?.map((item) => (
          <Thumbnail
            key={item.name}
            link={`/projects/${item.name}`}
            image="logo192.png"
            title={item.name}
          />
        ))}
      </ProjectList>
    </>
  );
}

export default Projects;
