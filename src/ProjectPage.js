import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function ProjectPage({ match, location }) {
  const {
    params: { project },
  } = match;

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.github.com/repos/TijsDeBelie/${project}/readme`
      );

      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <p>{data?.content}</p>
    </>
  );
}

export default ProjectPage;
