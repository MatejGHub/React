import React from "react";
import heroImg from "../assets/tech gear/assets/hero.webp";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container ">
          <div className="row pt-5">
            <div className="col-12 col-lg-6 pt-5">
              <h1 className=" fw-b fs-1 pt-5">
                <span className="text-primary">Discover </span>the future of
                tech
              </h1>
              <p className="lead pt-1 pb-3">
                Explore our latest gadgets and accessories designed to elevate
                your digital life
              </p>
              <button className="btn btn-primary px-5 py-3 d-inline-block fw-bold fs-5">
                Shop now
              </button>
            </div>
            <div className="col-12 col-lg-6">
              <img
                src={heroImg}
                alt="tech gear vr headset"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
