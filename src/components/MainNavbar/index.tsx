import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import classNames from "./MainNavbar.module.scss";

function MainNavbar({ activated }): JSX.Element {
  const { pathname } = useRouter();
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(0, 0, 0, 1)",
    },
  };
  return (
    <nav className={`${classNames.mainNavbar} ${classNames[activated]} `}>
      <div className={classNames.navWrap}>
        <div className={classNames.logo}>
          <motion.svg
            width="352.27"
            height="210.1"
            version="1.1"
            viewBox="0 0 352.27 210.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="m213.7 2.7165c-3.1 0.44892-8.3 2.1324-11.5 3.5914-5.8 2.6936-54.2 35.128-54.2 36.475s29.3 55.218 30.1 55.218c0.4 0 4.5-2.5813 9.1-5.836 10.5-7.295 20.8-12.682 27.6-14.253 9.3-2.1323 22-1.5712 31.6 1.5713 4.7 1.5712 8.8 2.8058 9 2.8058 1 0 3.5-9.4275 4.1-15.376 0.8-7.6317-1.2-18.406-4.7-24.915-9.6-18.182-30.3-26.15-46.6-18.069-6.6 3.3669-37.1 23.905-37.2 25.14 0 1.2346 12 23.12 12.7 23.12 0.9 0 6.3-3.8159 6.3-4.4893 0-0.3367-1.8-3.8158-3.9-7.8562-2.2-4.0403-3.7-7.6317-3.5-7.9684 0.2-0.4489 6.8-5.1626 14.6-10.438 15.9-10.662 21.2-12.57 29.8-10.774 14.4 3.0303 24.1 15.937 24.2 32.098 0 4.0404-0.2 7.5195-0.4 7.744s-2.8-0.2245-5.8-1.0101c-9.2-2.5813-16.4-3.1425-25.1-1.7957-11.5 1.7957-19.5 4.9382-30.1 12.009-5 3.2547-9.2 5.8361-9.3 5.7238-0.5-0.6734-19.2-35.241-20.3-37.597-1.1-2.2446-0.2-3.1425 19.1-16.161 27-18.294 28.8-19.192 40.6-19.865 8-0.33669 10.7-0.11223 16.1 2.0202 8.5 3.1424 15 7.9684 20.4 14.814 12.3 15.825 14.9 36.7 7.2 57.126-0.6 1.5713 3.3 4.377 20.1 14.814 40.7 25.14 37.9 23.68 45.4 23.568 6.3-0.112 6.7 0 8 2.806 0.7 1.683 1.5 3.367 1.7 3.703 0.6 1.347-6.1 3.255-11.2 3.255-2.8-0.112-6.7-0.785-8.6-1.459-1.9-0.785-18.4-10.662-36.6-21.885-40.6-25.027-46.5-27.272-64-23.681-6.1 1.2346-21.4 8.5296-21.4 10.213 0 0.5611 5.6 11.336 12.5 24.13 6.9 12.682 12.5 23.456 12.5 23.793 0 0.449-1.4 1.684-3.1 2.806-2.6 1.683-3.3 1.796-4.4 0.561-0.7-0.898-6.2-10.886-12.3-22.334s-11.5-21.436-12-22.222c-0.8-1.347-1.5-1.234-4.1 0.225-1.7 1.01-3.1 2.469-3.1 3.142 0 0.898 23.7 45.79 28.5 53.871 0.9 1.571 2.3 1.01 11.7-5.387l10.7-7.295-12.5-23.232c-6.9-12.794-12.6-23.681-12.7-24.242-0.1-0.5611 2.3-2.0201 5.3-3.2547 7-2.8057 19.4-3.0302 27-0.4489 3 1.0101 20.3 10.998 38.3 22.109 18.1 11.111 35.1 20.987 37.8 21.997 7.5 2.806 19.8 1.796 26.9-2.244 3-1.684 5.8-3.367 6.2-3.816 0.5-0.561-9.8-21.324-11.8-23.681-0.2-0.336-2 0.337-3.9 1.347-6.9 3.704-8.8 2.918-35.2-13.355-13.7-8.4174-25-15.488-25.1-15.6-0.2-0.2244 0.2-3.3669 0.9-6.9583 1.7-8.9785 1.4-22.446-0.6-30.302-7.6-29.741-33.8-48.708-60.8-43.995z"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              style={{ paintOrder: "fill markers stroke" }}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="m129.3 54.567c-5.6 3.8158-10.2 7.295-10.3 7.7439 0 0.449 5.6 11.223 12.5 24.018 6.9 12.682 12.2 23.569 11.9 24.13-1 1.908-11.8 4.601-18.8 4.714-3.9 0-9.8-0.898-13.1-1.908-3.3-1.123-20.1-10.775-37.8-21.661-17.6-10.886-34.3-20.763-37.1-21.885-7.6-3.2547-20-2.4691-28.3 1.7957-3.5 1.7957-6.3 3.7036-6.3 4.2648 0 1.3467 11 22.11 12.1 22.895 0.5 0.3367 2.2-0.2244 3.8-1.2345 6.3-3.5914 9-2.5813 33.5 12.458 12.7 7.856 24.1 14.926 25.3 15.712 2.1 1.459 2.1 1.684 0.7 7.407-4.8 20.202 1.5 43.546 15.6 58.585 11 11.56 22.3 16.498 37.9 16.498 13.6 0 18.5-2.357 47.8-22.11 14.2-9.651 25.9-17.62 26-17.732 0.3-0.337-28.5-53.647-29.6-54.881-0.7-0.786-4.3 1.122-10.3 5.05-20.5 13.693-27.2 16.049-43.8 15.152-7.9-0.337-12.2-1.235-17.3-3.367l-6.9-2.806-1.6 4.04c-1.2 3.03-1.7 7.407-1.7 15.937 0 10.774 0.3 12.345 2.9 18.406 8.4 19.079 27.3 28.17 45.6 21.773 1.9-0.674 11.7-6.734 21.8-13.468 17.7-11.897 18.3-12.458 16.9-14.702-0.7-1.347-3.5-6.51-6.2-11.448s-5-9.203-5.1-9.315c-0.4-0.673-3.8 0.786-5.7 2.469-1.7 1.459-1.6 2.02 2.2 8.978 2.3 4.153 4.1 7.857 4.1 8.306-0.1 1.01-26.5 18.742-30.3 20.426-4.1 1.683-14.8 1.346-19.7-0.561-10.3-4.041-17.9-15.488-18.8-28.058-0.7-10.55-0.5-10.774 6.5-8.754 3.2 0.898 10.5 1.571 16.3 1.571 16.1 0.112 25.8-3.367 44.2-15.712l3.6-2.47 10.7 19.753c6.1 11.336 10.4 20.202 9.9 20.763-2 2.132-38.3 26.374-44.2 29.517-8.8 4.601-21 5.499-30.8 2.132-25.8-8.866-39.3-38.72-30.4-67.226 1.6-5.051 1.7-6.734 0.7-7.744-2.7-2.694-54.8-34.119-58.6-35.241-2.2-0.6734-5.7-0.8978-7.9-0.4489-3.6 0.6734-4 0.4489-6-3.0302l-2.2-3.8159 2.8-1.3468c3.5-1.7957 12.9-1.7957 17.3-0.1122 1.9 0.6734 16.5 9.3152 32.4 19.192 36.6 22.67 41 25.027 49.7 26.598 12 2.357 26-0.561 36.5-7.519 4.2-2.694 4.3-2.918 2.9-5.387-2.4-4.04-24.6-45.342-24.6-45.79 0-0.5611 7-4.4892 7.4-4.0403 0.2 0.2245 5.9 10.662 12.5 23.12 6.7 12.458 12.6 23.007 13.1 23.344 1.2 0.898 7.1-3.143 6.6-4.602-0.5-1.3464-29.7-55.442-29.9-55.442-0.1 0-4.8 3.2547-10.4 7.0706z"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              style={{ paintOrder: "fill markers stroke" }}
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
        <div className={classNames.navMenu}>
          <Link href="/">
            <div
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/").toString()]
              }`}
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/about").toString()]
              }`}
            >
              About
            </div>
          </Link>
          <div className={classNames.vl}></div>
          <Link href="/contact">
            <div
              className={`${classNames.menuItem} ${
                classNames[(pathname.toLowerCase() === "/contact").toString()]
              }`}
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
