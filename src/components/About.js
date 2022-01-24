import React, { useContext, useEffect } from "react";
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
        <h1>This is about page.</h1>
        {/* <h2>{a.state.name}</h2>
        <h3>{a.state.class}</h3> */}
      </div>
    </div>
  );
};

export default About;
