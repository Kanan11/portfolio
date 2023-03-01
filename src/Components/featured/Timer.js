import React from "react";
import Clock from "react-live-clock";
import Slide from "react-reveal/Slide";

const Timer = () => {
  return (
    <Slide left delay={500}>
      <div className="countdown_wrapper">
        <div className="countdown_top"></div>

        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">
              <Clock format={"HH"} ticking={true} />
            </div>
            <div className="countdown_tag">Hour</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">
              <Clock format={"mm"} ticking={true} />
            </div>
            <div className="countdown_tag">Minuts</div>
          </div>

          <div className="countdown_item">
            <div className="countdown_time">
              <Clock format={"ss"} ticking={true} />
            </div>
            <div className="countdown_tag">Seconds</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Timer;
