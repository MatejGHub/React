import React from "react";
import shield from "../assets/tech gear/assets/security.png";
import bulb from "../assets/tech gear/assets/idea.png";
import clock from "../assets/tech gear/assets/clock.png";

const KeyFeatures = () => {
  return (
    <>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 text-center fw-bold text-primary mb-4">
            <h1>Key features</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="card p-3 shadow-sm mb-3">
              <div className="p-3">
                <img src={shield} alt="shield" className="icons mb-2" />
                <h3>Inovative energy</h3>
                <p className="card-text">
                  Explore products Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime, dolores.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card p-3 shadow-sm mb-3">
              <div className="p-3">
                <img src={bulb} alt="bulb" className="icons mb-2" />
                <h3>Lorem, ipsum.</h3>
                <p className="card-text">
                  Explore products Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime, dolores.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card p-3 shadow-sm">
              <div className="p-3">
                <img src={clock} alt="clock" className="icons mb-2" />
                <h3>Inovative Lorem.</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
