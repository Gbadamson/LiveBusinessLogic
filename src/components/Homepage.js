import React from "react";
import { Button } from "antd";

const Homepage = () => {
  const [okay, setOkay] = React.useState(true);
  const on = () => {
    setOkay(!okay);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("vidmate")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };
  const off = () => {
    setOkay(!okay);
    let video = document.getElementsByClassName("vidmate")[0];
    video.srcObject.getTracks()[0].stop();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "350px",
            width: "350px",
            border: "1px solid lightgrey",
            display: "flex",
            alignItems: "center",
          }}
        >
          <video height="70%" width="100%" className="vidmate" muted autoPlay />
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            width: "200px",
            justifyContent: "space-evenly",
          }}
        >
          <Button style={{ backgroundColor: "blue" }} onClick={on}>
            Start
          </Button>

          <Button style={{ backgroundColor: "orange" }} onClick={off}>
            Stop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
