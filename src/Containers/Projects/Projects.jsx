import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  function handleWorkFilter(item) {}

  return (
    <>
      <div className="work__filter">
        <h1>
          My <span>OverAll</span> Projects
        </h1>
        {["Javscript", "Reactjs", "Games", "UI/UX"].map((item, index) => (
          <div
            className={`work__filter-item ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
