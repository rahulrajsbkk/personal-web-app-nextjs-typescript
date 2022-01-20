/* eslint-disable @next/next/no-img-element */
import { socialmedia } from "../../configs/data";
import styles from "./Footer.module.scss";

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialBtns}>
        {socialmedia.map((social) => (
          <a href={social.link} className={styles.socialIcon} key={social.key}>
            <img
              src={social.icon}
              alt={social.alt}
              className={styles.socialIconIn}
            />
          </a>
        ))}
      </div>
      <span className={styles.footerText}>© 2019-2020 Wintbe.com</span>
    </footer>
  );
}

export default Footer;
