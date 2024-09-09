import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import AnimatedCursor from "react-animated-cursor";
import Header from "../../components/Header";
import MainNavbar from "../../components/MainNavbar";
import classNames from "./MainLayout.module.scss";
import FooterNavbar from "../../components/FooterNavbar";

type CursorParams = {
  innerSize: number;
  outerSize: number;
  color: String;
  outerAlpha: number;
  innerScale: number;
  outerScale: number;
};


function MainLayout({ children }): JSX.Element {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <>
      <Scrollbars
        universal
        autoHide
        className={classNames.container}
        renderTrackVertical={(props) => (
          <div {...props} className={classNames.scrollTrack} />
        )}
        renderView={(props) => (
          <div {...props} className={classNames.containerIn} />
        )}
        onScrollFrame={(value) => {
          setActiveNav(value?.scrollTop > 300);
        }}
      >
        <Header />
        <MainNavbar activated={activeNav} />
        {children}
        <FooterNavbar />
      </Scrollbars>
      <AnimatedCursor
        innerSize={8}
        outerSize={22}
        color="11,98,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
    </>
  );
}

export default MainLayout;
