import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import classNames from "./MainNavbar.module.scss";
import { MAIN_LOGO } from "../../configs";

function MainNavbar({ activated }): JSX.Element {
  const { pathname } = useRouter();
  return (
    <nav className={`${classNames.mainNavbar} ${classNames[activated]} `}>
      <div className={classNames.navWrap}>
        <div className={classNames.logo}>
          <Image
            className={classNames.imageIn}
            src={MAIN_LOGO}
            alt=""
            width={349}
            height={207}
            layout="responsive"
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className={classNames.navMenu}>
          <Link href="/">
            <a
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/").toString()]
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/about").toString()]
              }`}
            >
              About
            </a>
          </Link>
          <div className={classNames.vl}></div>
          <Link href="/contact">
            <a
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/contact").toString()]
              }`}
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
