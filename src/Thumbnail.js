import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

import styled from "styled-components";

const Project = styled.div`
  position: relative;
  padding: 15px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 10px;
`;

const ThumbImage = styled.img`
  display: block;
  margin: auto;
`;

const ProjectImage = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const TitleBanner = styled.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
`;

const Title = styled.h1`
  opacity: 1;
`;

const CategoryBanner = styled.div`
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  right: auto;
`;

const Category = styled.h1`
  opacity: 1;
`;

function Thumbnail({ link, image, title, category }) {
  return (
    <Project className="project">
      <Link to={link}>
        <ProjectImage className="project-image">
          <ThumbImage src={image} alt="Project" />
        </ProjectImage>
        <TitleBanner>
          <Title>{title}</Title>
        </TitleBanner>
        <CategoryBanner>
          <Category>{category}</Category>
        </CategoryBanner>
      </Link>
    </Project>
  );
}

export default Thumbnail;
