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
      description: "A responsive To-do website made by json-server used react",
    },
    {
      id: 3,
      title: "Travel Booking",
      imgpro: app3,
      description:
        "This my first project its just UI for Travel booking website used react and Tailwind css",
    },
    {
      id: 4,
      title: "Posting Appliction",
      imgpro: app4,
      description:
        "Posting appliction to store post, edit and delete developed by react",
    },
    {
      id: 4,
      title: "Gym Website",
      imgpro: app4,
      description:
        "Used api gymexersice from Rapid Api developed by react and tailwindcss to schedule your daily routine work out",
    },
  ];
  return (
    <div className="grid grid-cols-3  gap-10">
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
