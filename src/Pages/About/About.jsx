import React from "react"
import AboutBanner from "../../components/AboutBanner/index";
import Main from "../../components/AboutMain/index";

const About = () => {

  return (
    <React.Fragment>
      <AboutBanner page="about" />
      <Main />
    </React.Fragment>
  )
}

export default About;