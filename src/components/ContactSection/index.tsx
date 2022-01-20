import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import classNames from "./ContactSection.module.scss";

function ContactSection(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = () => {
    let formData = new FormData();
    formData.append("entry.1534649597", name);
    formData.append("entry.1564222794", email);
    formData.append("entry.1034811362", subject);
    formData.append("entry.1182816775", message);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post(
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSeQnSMoNuU80uKBYG-7wYyeAnSRQsQVukwxJKX0f-M6vS1oQg/formResponse",
        formData,
        config
      )
      .then((response) => {})
      .catch((error) => {})
      .finally(() => {
        toast.success("Message Send!");
        setTimeout(() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, 400);
      });
  };

  const validate = (onValidate) => {
    switch (false) {
      case Boolean(name):
        toast.error("Name is Required!");
        break;
      case Boolean(email):
        toast.error("Email is Required!");
        break;
      case Boolean(
        email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ):
        toast.error("Invalid Mail Id!");
        break;
      case Boolean(subject):
        toast.error("Subject is Required!");
        break;
      case Boolean(message):
        toast.error("Message is Required!");
        break;
      default:
        onValidate();
        break;
    }
  };

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

        <form
          className={classNames.contactForm}
          onSubmit={(e) => {
            e.preventDefault();
            validate(formSubmit);
          }}
        >
          <input
            type="text"
            className={classNames.inpHalf}
            placeholder="YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className={classNames.inpHalf}
            placeholder="YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className={classNames.inpFull}
            placeholder="SUBJECT"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className={classNames.inpTextArea}
            placeholder="YOUR MESSAGE"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label className={`link ${classNames.button}`}>
            <input
              type="submit"
              value="SEND MESSAGE"
              className={classNames.btnText}
            />
            <div className={classNames.btnIcon}>
              <Image
                src="/assets/icons/download.png"
                alt=""
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
          </label>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
