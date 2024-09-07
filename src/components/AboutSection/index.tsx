import React from "react";
import Image from "next/image";
import classNames from "./AboutSection.module.scss";
import AboutMySkills from "../AboutMySkills";
import AboutExperienceAndEducation from "../AboutExperienceAndEducation";
import data from "./data.json";

function AboutSection(): JSX.Element {
  return (
    <section className={classNames.AboutSection}>
      <div className={classNames.title}>
        <span className={classNames.main}>RESUME</span>
        <div className={classNames.inTitle}>
          ABOUT&nbsp;&nbsp;<span>ME</span>
        </div>
      </div>
      <div className={classNames.infos}>
        <div className={classNames.personalInfo}>
          <div className={classNames.personalTitle}>PERSONAL INFOS</div>
          <div className={classNames.details}>
            <div className={classNames.item}>
              Name:&nbsp;&nbsp;
              <wbr />
              <span>Rahul Raj S B</span>
            </div>
            <div className={classNames.item}>
              Age:&nbsp;&nbsp;
              <wbr />
              <span>{getAge()} Years</span>
            </div>
            <div className={classNames.item}>
              Phone:&nbsp;&nbsp;
              <wbr />
              <a href="tel:+918310349909">
                <span>+91 8310349909</span>
              </a>
            </div>
            <div className={classNames.item}>
              Email:&nbsp;&nbsp;
              <wbr />
              <a href="mailto:rahulrajsb.developer@gmail.com">
                <span>rahulrajsb.developer@gmail.com</span>
              </a>
            </div>
            <div className={classNames.item}>
              Languages:&nbsp;&nbsp;
              <wbr />
              <span>English,Malayalam</span>
            </div>
            <div className={classNames.item}>
              Github:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://github.com/rahulrajsbkk"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rahulrajsbkk</span>
              </a>
            </div>
            <div className={classNames.item}>
              LinkedIn:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://www.linkedin.com/in/rahulrajsb/"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rahulrajsb</span>
              </a>
            </div>
            <div className={classNames.item}>
              CodersRank:&nbsp;&nbsp;
              <wbr />
              <a
                href="https://profile.codersrank.io/user/rahulrajsbkk"
                target="_blank"
                rel="noreferrer"
              >
                <span>@rahulrajsbkk</span>
              </a>
            </div>
          </div>
          <a
            className={classNames.button}
            href="https://drive.google.com/file/d/1NyV_iiYB3ImVPHtJ0VCFT0o6QS6N_cTF/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classNames.btnText}>Download Resume</span>
            <div className={classNames.btnIcon}>
              <Image
                src="/assets/icons/download.png"
                alt=""
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
          </a>
        </div>
        <div className={classNames.countCards}>
          <div className={classNames.card}>
            <div className={classNames.count}>{getExperience()}</div>
            <div className={classNames.label}>YEARS OF EXPERIENCE</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>{data.react}</div>
            <div className={classNames.label}>REACT.JS PROJECTS</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>{data.reactnative}</div>
            <div className={classNames.label}>REACT-NATIVE PROJECTS</div>
          </div>
          <div className={classNames.card}>
            <div className={classNames.count}>{data.nodejs}</div>
            <div className={classNames.label}>NODE.JS PROJECTS</div>
          </div>
        </div>
      </div>
      <AboutMySkills />
      <AboutExperienceAndEducation />
    </section>
  );
}

function getDifference(date: Date): number {
  var today = new Date();
  var age = today.getFullYear() - date.getFullYear();
  var m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }
  return age;
}

function getAge(): number {
  var birthDate = new Date(894801600000);
  return getDifference(birthDate);
}

function getExperience(): number {
  var joinDate = new Date(1530383400000);
  return getDifference(joinDate);
}

export default AboutSection;
