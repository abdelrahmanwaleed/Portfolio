import React from "react";
import Projectcard from "./Projectcard";
import app1 from "../images/weatherapp.png";
import app2 from "../images/weatherapp.png";
import app3 from "../images/weatherapp.png";
import app4 from "../images/weatherapp.png";

const ProjectList = () => {
  const projectapps = [
    {
      id: 1,
      title: "Weather Appliction",
      imgpro: app1,
      description:
        "Its a responsive weather app made with: React.js API use weather and geo",
    },
    {
      id: 2,
      title: "To-do List Appliction",
      imgpro: app2,
      description:
        "Its a responsive weather app made with: React.js API use weather and geo",
    },
    {
      id: 3,
      title: "Travel Booking",
      imgpro: app3,
      description:
        "Its a responsive weather app made with: React.js API use weather and geo",
    },
    {
      id: 4,
      title: "Posting Appliction",
      imgpro: app4,
      description:
        "Its a responsive weather app made with: React.js API use weather and geo",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-10">
      {projectapps.map((project) => (
        <Projectcard
          title={project.title}
          description={project.description}
          imgpro={project.imgpro}
          key={project.id}
        />
      ))}
    </div>
  );
};

export default ProjectList;
