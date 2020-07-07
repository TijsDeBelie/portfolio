import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ReactMarkdown = require("react-markdown");

function Readme({ project }) {
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
    };

    fetchData();
  }, []);

  return <>{data ? <ReactMarkdown source={data} /> : <p>No Readme</p>}</>;
}

export default Readme;
