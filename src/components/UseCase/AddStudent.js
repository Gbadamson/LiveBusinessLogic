import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../GlobalContext";

const AddStudent = () => {
  const { student, addStudent } = useContext(GlobalContext);
  const [inner, setInner] = useState("");
  const hist = useHistory();
  const addit = () => {
    // const newer = {
    //   id: uuid(),
    //   name: inner,
    // };
    addStudent({ id: uuid(), name: inner });
  };
  const checker = () => {
    if (inner == "") {
      alert("Please Enter a task before leaving");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>Add a Task</div>
        <div style={{ marginTop: "20px", width: "300px" }}>
          <input
            style={{ width: "100%" }}
            placeholder="Enter a new Task: "
            type="text"
            onChange={(e) => {
              setInner(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <Button
            onClick={() => {
              checker();
              if (inner != "") {
                addit();
                hist.push("/cruise");
              }
            }}
            style={{ backgroundColor: "green" }}
          >
            Accept
          </Button>
          <Link to="/cruise">
            <Button style={{ backgroundColor: "red" }}>Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
