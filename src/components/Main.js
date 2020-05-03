import React, { Fragment } from "react";
import { connect } from "react-redux";
import { startFetchProjects } from "../actions";
import { Element } from "react-scroll";
import Slider from "./Slider/SliderView";
import Contact from "./Contact";
import Projects from "./Projects";

import Carousel from "./Carroussel";

class Main extends React.Component {
  componentDidMount() {
    this.props.startFetchProjects();
  }
  render() {
    return (
      <Fragment>
        {/* <Carousel /> */}

        <Element name="aboutUs">
          <Slider />
        </Element>
        <Element name="projects">
          <Projects projects={this.props.projects} />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { startFetchProjects })(Main);
