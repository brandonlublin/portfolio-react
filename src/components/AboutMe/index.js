import React, {Component} from "react";
import "./style.css";

let AboutMe = () => {
  return (
    <div className="row container">
      <p className="aboutMe">
        My name is Brandon Lublin and I am an aspiring Full Stack developer! I got my first exposure in coding while in highschool. My highschool offered a 'Computer Basics and Web Design' course that taught me basic HTML principles and dabbled in CSS, but this was way back in 2008 so things have changed dramatically since then.
      </p>

      <p className="aboutMe">
        I went to college at Boise State University where I studied History in hopes of getting into Law School but quickly determined that I wasn't cut out for the mass amounts of paperwork that comes with being a lawyer. After a few years away from school, and with my current position integrating a few skills that I thought were fairly similar to coding, I thought what better way to go back to school and finish what I started while trying to jump into a new career that I have a genuine interest in!?
      </p>

      <p className="aboutMe">
        Anything that involves the outdoors is my lifeblood. In the summer, I love to hike, swim, travel, and go to sporting events, and during the winter, you'll have a tough time finding me anywhere else than the mountain. Snowboarding is probably my biggest hobby and there isn't many things I'd rather do than freeze my face off while cruising through some fluffy snow!!
      </p>
    </div>
  );
};

export default AboutMe;