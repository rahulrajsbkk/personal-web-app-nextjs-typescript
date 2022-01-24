import React from "react";
import Image from "next/image";

import classNames from "./ContactSection.module.scss";
import ContactForm from "../ContactForm";

function ContactSection(): JSX.Element {
  return (
    <section className={classNames.ContactSection}>
      <div className={classNames.title}>
        <span className={classNames.main}>CONTACT</span>
        <div className={classNames.inTitle}>
          GET IN&nbsp;<span>TOUCH</span>
        </div>
      </div>
      <div className={classNames.contents}>
        <div className={classNames.contactDetail}>
          <div className={classNames.titleIn}>DON&apos;T BE SHY !</div>
          <p className={classNames.desc}>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className={classNames.item}>
            <div className={classNames.icon}>
              <Image
                src="/assets/icons/mapsBlue.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
              />
            </div>
            <div className={classNames.texts}>
              <div className={classNames.label}>ADDRESS</div>
              <div className={classNames.value}>
                Koyilandy, Kozhikode, Kerala, India 673307
              </div>
            </div>
          </div>
          <div className={classNames.item}>
            <div className={classNames.icon}>
              <Image
                src="/assets/icons/mailBlue.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
              />
            </div>
            <div className={classNames.texts}>
              <div className={classNames.label}>MAIL ME</div>
              <a className={classNames.value} href="mailto:rrsbkk@gmail.com">
                rrsbkk@gmail.com
              </a>
            </div>
          </div>
          <div className={classNames.item}>
            <div className={classNames.icon}>
              <Image
                src="/assets/icons/mapsBlue.png"
                alt=""
                width={128}
                height={128}
                layout="responsive"
              />
            </div>
            <div className={classNames.texts}>
              <div className={classNames.label}>CALL ME</div>
              <a href="tel:+917559861279" className={classNames.value}>
                <span>+91 7559861279</span>
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
