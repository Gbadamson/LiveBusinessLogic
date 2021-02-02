import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";

const Cruiser = () => {
  const { student, removal } = useContext(GlobalContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <center>
        <div>
          You wanna Add a task, let's go by clicking the Add Task button
        </div>
        {student.map(({ id, name }) => (
          <div
            style={{
              height: "50px",
              width: "400px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              border: "1px solid lightgrey",
              marginTop: "60px",
            }}
          >
            <div>{name}</div>
            <div style={{ display: "flex" }}>
              <Link to="/student/1">
                <Button style={{ backgroundColor: "green" }}>Edit</Button>
              </Link>
              <Button
                onClick={() => {
                  let x = prompt("Are you sure? (Y/N)");
                  if (x === "Y" || x === "y") {
                    removal(id);
                  } else if (x === "N" || x === "n") {
                    alert("Brave Decision");
                  } else alert("Unrecognised value");
                }}
                style={{ backgroundColor: "red" }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </center>
    </div>
  );
};

export default Cruiser;
