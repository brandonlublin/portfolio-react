import React, {Component} from "react";
import "./style.css";
import Seattle from "./assets/seattle.jpg";

const HeroImage = () => {
    return (
        <div>
            <div className="parallax-container mainImg">
                <div className="row hero-header">
                    <div className="row col l12 m6 s12">
                        <h1 className="headerText1">Hello, I'm Brandon Lublin.</h1>
                        <h4 className="headerText2">I'm a full stack web developer based out of Seattle, WA.</h4>
                    </div>
                </div>
                <div className="parallax"><img src={Seattle} alt="Seattle"/></div>
            </div>
        </div>
    );
}

export default HeroImage;