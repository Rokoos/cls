import React from "react";
import Zoom from "react-reveal/Zoom";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  return (
    <div className="center_wrapper">
      <div className="title">
        <p className="heading-secondary">Skontaktuj się z nami!</p>
      </div>
      <div className="vn_wrapper">
        <div className="wrapper_box">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red middle">
                    <CallIcon className="icon-style" />
                  </div>

                  <div className="vn_title">+48 536 095 222</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={300}>
            <div className="vn_item ">
              <div className="vn_outer first">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow middle">
                    <MailIcon className="icon-style" />
                  </div>

                  <div className="vn_title">
                    cls.instalacje.elektryczne@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="wrapper_box">
          <Zoom duration={500} delay={400}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_linkedIn middle">
                    <LinkedInIcon className="icon-style" />
                  </div>

                  <div className="vn_title">
                    <a
                      href="https://www.linkedin.com/company/cls-instalacje-elektryczne/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jesteśmy na LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_fb middle">
                    <FacebookIcon className="icon-style" />
                  </div>

                  <div className="vn_title">
                    {" "}
                    <a
                      href="https://www.facebook.com/cls.instalacje.elektryczne/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jesteśmy na Fejsie
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Contact;
