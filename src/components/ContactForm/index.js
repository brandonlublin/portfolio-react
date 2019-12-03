import React, {Component} from "react";
import "./style.css";

let ContactForm = () => {
    return (
    <div>
        <div className="row contactForm">
            <form className="container" method="POST" action="https://formspree.io/brandonlublin26@gmail.com">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="message" type="text" className="validate" />
                        <label for="message">Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                    </div>
                </div>
                <button id='submitButton' className='waves-effect waves-light btn-small waves-light' type="submit">Send
                    Email</button>
            </form>
        </div>
    </div>
    );
};

export default ContactForm;