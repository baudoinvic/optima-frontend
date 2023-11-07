import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../../components/site/navbar";

const About = () => {
  return (
    <div className="about-optima">
    
     <Navbar />
     
      <div className="who-we-are">
        <h1 className="all-about">who we are</h1>
        <p className="all-about-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br></br>
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an{" "}
        </p>
      </div>

      <div className="more-about">
        <div className="col-1">
          <h2>Lorem oposum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>

        <div className="col-2">
          <h2>Lorem oposum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>

        <div className="col-3">
          <h2>Lorem oposum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
            mauris, nec turpis
          </p>
        </div>
      </div>
      <h3 className="patner">Our patners</h3>

      <div className="our-patners">
        <div className="wacu">
          <img src="https://pbs.twimg.com/profile_images/1443273520096718848/mxCqIaBs_400x400.jpg"></img>
        </div>

        <div className="museum">
          <img src="https://images.squarespace-cdn.com/content/v1/5dc4baa7a397035a70154c34/1573397126349-M11KK1T8YCSYEVLAPFRH/INMR+logo.jpg"></img>
        </div>

        <div className="imbuto">
          <img src="https://logo.lusha.co/d/company_6849323_logo.jpg"></img>
        </div>

        <div className="ministry">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsylJY4xBQ_YVFD0ZLsvIKLJWKv2UGeMnj8jOtRn9voaVn6mgXw3JJRsbOACLBCa7uPs&usqp=CAU"></img>
        </div>
      </div>
      <span className="reserve">Reserved Copyright © 2023.optima</span>

      <div className="social-media-icon">
        <div className="social-icons">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} />
        </div>

        <div className="social-icons">
          <FontAwesomeIcon icon={faTwitter} className="custom-twitter-icon" />
        </div>
      </div>
    </div>
  );
};

export default About;
