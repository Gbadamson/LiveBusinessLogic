import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
// import { Button } from "antd";

const EditStudent = (props) => {
  const hist = useHistory();
  const [input, setInput] = useState("");
  const { student, editing } = useContext(GlobalContext);

  const [presently, setPresently] = useState({
    id: "",
    student: "",
  });

  const presentID = props.match.params.id;

  useEffect(() => {
    const taskID = presentID;
    const presentTask = student.find((name) => student.id == taskID);
    setPresently(presentTask);
  }, [presentID, student]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // justifyContent: "space-around",
        }}
      >
        <div>Edit Student</div>
        <div style={{ marginTop: "20px" }}>
          <input type="text" value={input} placeholder="Enter task" />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <Button
            onClick={hist.push(`/student/${presentID}`)}
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

export default EditStudent;
