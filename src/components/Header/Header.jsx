import React, { Fragment } from "react";
import Clock from "../Common/Clock";
import { useAuth } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const {
    decodeS1,
    decodeS2,
    decodeS3,
    decodeS4,
    decodeS5,
    //remainingSessionTime,
  } = useAuth();

  return (
    <div className="header_wrap">
      <div className="header_top_back">
        <div className="header_info_box left">
          <Clock></Clock>
          {/*<div className="info_text">{decodeS4()}&nbsp; |</div>
          <div className="info_text">{decodeS3()}</div>
          <div className="info_text">{decodeS2()}</div> */}
        </div>
        <div className="header_info_box right">
          <div className="info_text">
            {/* {remainingSessionTime && (
              <Fragment>
                세션 만료&nbsp;:&nbsp;
                {remainingSessionTime.minutes < 10
                  ? "0" + remainingSessionTime.minutes
                  : remainingSessionTime.minutes}
                분&nbsp;
                {remainingSessionTime.seconds < 10
                  ? "0" + remainingSessionTime.seconds
                  : remainingSessionTime.seconds}
                초
              </Fragment>
              )} */}
          </div>
        </div>
      </div>
      {!path.includes("/reserv") && (
        <div className="header_bottom_back">
          <div className="header_info_box">
            <div className="info_icon"></div>
            <div className="info_text_box">
              <div className="info_name">{decodeS2()}</div>
              <div className="info_id">
                {decodeS3()} | {decodeS4()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
