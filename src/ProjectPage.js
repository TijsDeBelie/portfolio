import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Readme from "./Readme";

const ReactMarkdown = require("react-markdown");

function ProjectPage({ match, location }) {
  const {
    params: { project },
  } = match;

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/TijsDeBelie/${project}/readme`,
        {
          headers: {
            Accept: "application/vnd.github.v3.raw",
          },
        }
      );

      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Readme project={project}></Readme>
    </>
  );
}

export default ProjectPage;
