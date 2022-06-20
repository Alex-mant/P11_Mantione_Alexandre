import React from "react"
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Main from "../../components/AboutMain/AboutMain";
import { data } from "../../data/data";

const About = () => {
  const myData = data;

  return (
    <React.Fragment>
      <AboutBanner />
      <Main myData={myData} />
    </React.Fragment>
  )
}

export default About;