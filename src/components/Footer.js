import React from "react";

function Footer() {
  let year = new Date().getFullYear();

  let myStyle = {
    color: "white",
    margin: "0 0"
  };

  return (
    // <div className="d-flex footer mt-auto row text-center bg-dark" style={myStyle}>
    <div className="d-flex footer row flex-wrap text-center bg-dark" style={myStyle}>
      <p className="mt-4">Made with ❤️ in Delhi, India.</p>
      <p className="mb-3" style={{"marginBelow": "0"}}>Hardik Bachhan @ {year}.</p>
    </div>
  );
}

export default Footer;
