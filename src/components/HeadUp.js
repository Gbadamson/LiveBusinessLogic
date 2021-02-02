import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HeadUp = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "60px",
          width: "100vw",
          justifyContent: "space-evenly",
          backgroundColor: "lightgreen",
          alignItems: "center",
          color: "gold",
          fontFamily: "cursive",
        }}
      >
        <Link to="/">
          <div>Live Class</div>
        </Link>
        <Link to="/cruise">
          <div>Task Management</div>
        </Link>
        <Link to="/addstudent">
          <Button>Add a Task</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeadUp;
