import React from "react";
const Nav = () => {
  return (
    <nav style={stylz}>
      <p className="pt3 mt2 mr3 pointer p-a">Gmail</p>
      <p className="mt2 pt3 mr2 pointer p-a">Images</p>
      <button className=" btn1  mr2">
        <abbr title="Google apps">
          <i className="  fas fa-th"></i>
        </abbr>
      </button>
      <div>
        <button className="btn2">
          <abbr title="Google Account: JOHN ADEBA (adebajohn@gmail.com)">
            J
          </abbr>
        </button>
      </div>
    </nav>
  );
};
const stylz = {
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "0.9rem",
};

export default Nav;
