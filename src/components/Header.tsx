import React from "react";
import Head from "next/head";
import { SITE_TITLE, SITE_DESC, SITE_URL, SITE_IMAGE } from "../configs";

function Header(): JSX.Element {
  return (
    <Head>
      <title>{SITE_TITLE}</title>
      <meta name="description" content={SITE_DESC} />
      <meta name="keywords" content="Full-Stack Developer, JavaScript, React, React Native, Web Development, Software Engineer, Freelance Developer, Mentor, Programming Tutor, Technology Consultant" />
      <meta name="author" content="Rahul Raj" />
      <meta name="robots" content="index, follow" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#0b62ff"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#0b62ff" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESC} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={SITE_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_TITLE} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESC} />
      <meta name="twitter:image" content={SITE_IMAGE} />
      <meta name="twitter:site" content="@YourTwitterHandle" />
    </Head>
  );
}

export default Header;
