// import React, { useContext, useEffect } from "react";
import React from "react";
// import noteContext from "../context/notes/noteContext";

const About = () => {
  // const a = useContext(noteContext);

  // useEffect(() => {
  //   a.update();
  //   // eslint-disable-next-line
  // }, []);
  
  return (
    <div>
      <div className="container">
        <h1>About Us</h1>
        <h6>iNotebook is a cross-platform note-taking app that’s great for joting down day to day tasks and Todos. It comes with a taging feature which can be used to segregate notes.</h6>
        <h6>Editing and Deleting notes is as easy as it could be. Enjoy scripting your day to day work and saving them as cards for efficient work flow and easy managing.</h6>
        <h5 className="mt-5">Source code can be found at: </h5> 
        <h6> <a href="https://github.com/hardikbachhan/iNotebook-frontend">Frontend Repository</a> </h6> 
        <h6> <a href="https://github.com/hardikbachhan/iNotebook-backend">Backend Repository</a> </h6>
        {/* <h2>{a.state.name}</h2>
        <h3>{a.state.class}</h3> */}
      </div>
    </div>
  );
};

export default About;
