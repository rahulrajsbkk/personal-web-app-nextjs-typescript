import React from "react";
import classNames from "./HeroSection.module.scss";
import useWindowDimensions from "../../utils/WindowSize";

function HeroSection() {
  const { width, height } = useWindowDimensions();
  let base = Math.min(width, height);
  return (
    <section className={classNames.HeroSection} id="home">
      <div
        className={classNames.bgCircle}
        style={{ height: base * 1.4, width: base * 1.4 }}
      ></div>
      <div className={classNames.texts}>
        <div className={classNames.title}>
          <span>I am</span> <br />
          Rahul Raj
        </div>
        <div className={classNames.desc}>
          As a seasoned full-stack developer with deep expertise in JavaScript,
          I excel in creating dynamic applications using React and React Native.
          My ability to rapidly learn new technologies ensures I stay ahead of
          industry trends. I’m dedicated to transforming complex challenges into
          seamless, user-centric solutions.
        </div>
        <div className={classNames.btns}>
          <a href="mailto:rahulrajsb.developer@gmail.com" className={classNames.btnHireMe}>
            Email Me
          </a>
          <a href="tel:8310349909" className={classNames.btnHireMe}>
            Call Me
          </a>
        </div>
      </div>
      <div className={classNames.bg} />
    </section>
  );
}

export default HeroSection;
