import React from "react";
import microphone from "./microphone.png";

const Input = () => {
  return (
    <div className=" ">
      <div className="  center pt2 pb2 input-field">
        <i className=" pl3 fa fa-search hide"></i>

        <input className="w-80 " type="text" />

        <img alt="" src={microphone} className="tc pr3" />
      </div>

      <div>
        <button className="btn pointer">Google Search</button>
        <button className="btn pointer">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Input;
