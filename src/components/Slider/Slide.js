import React from "react";
const Slide = (props) => {
  return (
    <div className="slide">
      <img src={props.image} alt="" className="photo" />
      <div className="slide_box">
        <div className="slide_title">
          <p>{props.title}</p>
        </div>

        <div className={props.class}>
          <span className="text">{props.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
