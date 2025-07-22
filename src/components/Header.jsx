import React from "react";

function Header () {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header_content">
                <div className="header-section">
                  <h2>Hello, I Am</h2>
                  <h1> Shrerajj Chavan</h1>
                  <p>
                    I Am a Developer <br /> I Live In Pune And I Love To Creat
                    Website{" "}
                  </p>
                  <div className="header_button">
                    <a href="header" className="btn btn-outline">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src={require("../image/profile-removebg.png")}
                width="720"
                height="650"
                alt="image"
                className="image"
              />
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;