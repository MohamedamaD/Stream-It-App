import React from "react";
import "./About.scss";
import { collaborators, images, teammates } from "../../constants";
import { PageTitle } from "../../components";

export const About = () => {
  return (
    <div className="__about-page">
      <main>
        <PageTitle title="about"/>
        <div className="__about-container container">
          <div className="__teamwork">
            <h3>Masterminds Team</h3>
            <p className="__title">
              <span>
                Your Streamit is build by one of the best and well experienced
                web developers and an awarded Envato Elite Author.
              </span>
            </p>
            <div className="__team">
              {teammates.map((teammate, index) => (
                <div className=" __teammate" key={teammate.name + index}>
                  <div className="box">
                    <img src={teammate.img} alt={teammate.name} />
                  </div>
                  <div className="box">
                    <span>{teammate.jopTitle}</span>
                    <h4>{teammate.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="__clients">
            <div className="img-box">
              <img src={images.MAP} alt="map-img" />
            </div>
            <div className="text-box">
              <h3>Contact Us Here</h3>
              <p>
                Streamit is located in Los Angeles city and you can contact us
                at <span>info@medyapim.com</span> for any tech-related support
                and assistance. We love to hear from our Streamit users.
              </p>
            </div>
          </div>
          <div className="__collaborations">
            <h3>Work With The Best</h3>
            <div className="__wrapper">
              {collaborators.map((collaborator, i) => (
                <div className="__collaborator" key={i}>
                  <img src={collaborator} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
