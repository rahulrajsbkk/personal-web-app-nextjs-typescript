import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import MainNavbar from "../../components/MainNavbar";
import classNames from "./MainLayout.module.scss";
import FooterNavbar from "../../components/FooterNavbar";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MainLayout({ children }) {
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
          console.log(`value`, value);
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
