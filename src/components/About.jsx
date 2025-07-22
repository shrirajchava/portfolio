import React from "react";

function About () {
    return (
      <div className="about">
        <div className="container">
          <div className="common">
            <h1 className="about-title">About Me</h1>
            <div className="underline-border"></div>
          </div>

          <div className="row h-650 alignCenter">
            <div className="col-6">
              <div className="about_img">
                <img
                  src={require("../image/profile-removebg.png")}
                  width="720"
                  height="650"
                  alt="image"
                  className="image"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="about_info">
                <h1>
                  Creative Reactjs Design <br />
                  based in Pune,Maharashtra
                </h1>
                <div className="about_info">
                  <p>
                    - I am able to handle multiple tasks on a daily <br />
                    - I use a creative approach to problem solving. <br />
                    - I am a dependable person who is great at time management.{" "}
                    <br />
                    - I am always energetic and eager to learn new skills.{" "}
                    <br />
                    - I have experience working as part of a team and
                    individually. <br />- I enjoy every step of the design
                    process from discussion & collaboration.
                  </p>
                  <div className="about_buttons">
                    <a href="#about" ClassName="btn about-btn-outline">
                      {/* Downlod CV */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;