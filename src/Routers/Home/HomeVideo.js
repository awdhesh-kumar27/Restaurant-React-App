import React from "react";
import './HomeVideo.css';

import DemoVideo from "../../Assets/Demo-video.mp4";


const HomeVideo = () =>{
    return(
        <div className="video-div">
          <video className="demo-video" autoPlay loop muted>
          <source src={DemoVideo} type="video/mp4"/>
          </video>
        </div>
    );
}

export default HomeVideo;