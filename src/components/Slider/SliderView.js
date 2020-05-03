import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import slideOne from "../../images/1.jpg";
import slideTwo from "../../images/2.jpg";
import slideThree from "../../images/3.jpg";
import slideFour from "../../images/4.jpg";

import { aboutUs, offer, special, more } from "../../data";

export default class SliderView extends React.Component {
  state = {
    data: [
      {
        id: 1,
        image: slideOne,
        text: aboutUs,
        title: "kim jesteśmy?",
        class: "photo-one",
      },
      {
        id: 2,
        image: slideTwo,
        text: offer,
        title: "oferta:",
        class: "photo-two",
      },
      {
        id: 3,
        image: slideThree,
        title: "co nas wyróżnia?",
        text: special,
        class: "photo-three",
      },
      {
        id: 4,
        image: slideFour,
        title: "a ponadto...",
        text: more,
        class: "photo-four",
      },
    ],
  };
  render() {
    return (
      <div className="aboutus">
        <div className="title">
          <p className="heading-secondary">Kim jesteśmy?</p>
        </div>
        <Slider
          speed={1000}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          autoplay={true}
          autoplaySpeed={8000}
          pauseOnHover={false}
          easing="ease-in"
        >
          {this.state.data.map((obj) => (
            <Slide
              key={obj.id}
              image={obj.image}
              class={obj.class}
              title={obj.title}
              text={obj.text}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
