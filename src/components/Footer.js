import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="f-p">
        <p>Slovenia</p>
      </div>
      <hr />
      <div className="f-f  ">
        <div className="f-r center ">
          <p className="f-a  ">Privacy</p>
          <p className="f-a">Terms</p>
          <p className="f-a">Settings</p>
        </div>
        <div className="f-l center ">
          <p className="f-a">Advertising</p>
          <p className="f-a">Business</p>
          <p className="f-a" href="#">
            About
          </p>
          <p className="f-a" href="#">
            How Search works
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
