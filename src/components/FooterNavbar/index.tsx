import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "./FooterNavbar.module.scss";

function FooterNavbar(): JSX.Element {
  const { pathname } = useRouter();
  return (
    <nav className={classNames.footerNavbar}>
      <div className={classNames.navMenu}>
        <Link href="/about">
          <div
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/about").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/user.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>About</span>
          </div>
        </Link>
        <Link href="/">
          <div
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/home.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>Home</span>
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`${classNames.menuItem} ${
              classNames[(pathname.toLowerCase() === "/contact").toString()]
            }`}
          >
            <div className={classNames.icon}>
              <Image
                className={classNames.iconIn}
                src="/assets/icons/contact.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>Contact</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default FooterNavbar;
