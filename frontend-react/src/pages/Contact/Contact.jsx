import React from "react";
import "./Contact.scss";

import { Footer, Header } from "../../containers";
import { widgets } from "../../constants";
import { Input, PageTitle, TextArea } from "../../components";
export const Contact = () => {
  return (
    <div className="__contact-page">
      <PageTitle title="contact" />
      <div className="__form">
        <div className="container">
          <div className="__text-box">
            <h3>Create With Us</h3>
            <p>To learn more about how Streamit can help you, contact us.</p>
          </div>
          <form action="">
            <Input
              placeholder="Your name*"
              id="fName"
              type="text"
              className="md"
            />
            <Input
              placeholder="last name*"
              id="lName"
              type="text"
              className="md"
            />
            <Input
              placeholder="phone Number*"
              id="phone"
              type="number"
              className="md"
            />
            <Input
              placeholder="Your email*"
              id="email"
              type="email"
              className="md"
            />
            <TextArea id="message" placeholder="Your message*" />
            <Input type="submit" />
          </form>
        </div>
      </div>
      <div className="__maps">
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13815.988958239242!2d31.182524215344255!3d30.0369370519444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1704141644304!5m2!1sar!2seg"
          style={{ border: 0, width: "100%", height: 600 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="__widgets">
        <div className="container">
          <h1>
            To Learn More About How Streamit Can Help You, Contact Us. We'd Be
            Happy To Take On The Challenge!
          </h1>
          <div className="__wrapper">
            {widgets.map((el, i) => (
              <div className="__wrap" key={i}>
                <div className="img-box">{el.Icon}</div>
                <div className="text-box">
                  <h4>{el.title}</h4>
                  <p>
                    call on: <span>{el.call}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
