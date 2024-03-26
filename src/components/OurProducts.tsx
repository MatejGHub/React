import React from "react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import HeadphoneImg from "../assets/tech gear/assets/headphones-1.webp";
import VR1 from "../assets/tech gear/assets/vr-1.webp";
import VR2 from "../assets/tech gear/assets/vr-2.webp";

const OurProducts = () => {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-primary fs-1 fw-bold mb-3 text-center">
            Our Products
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul
            className="nav nav-tabs  justify-content-center mt-3"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link active fs-5 me-2 me-md-4`}
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-5 me-2 me-md-4"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Headphones
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fs-5 me-2 me-md-4"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                VR Sets
              </button>
            </li>
          </ul>
          <div className="tab-content text-center" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-12 col-lg-4 mt-5">
                  <img
                    src={HeadphoneImg}
                    alt="Headphones Image"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-12 col-lg-4 mt-5">
                  <img
                    src={VR1}
                    alt="VR Image"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-12 col-lg-4 mt-5">
                  <img
                    src={VR2}
                    alt="VR Image"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="col-12 col-lg-4 mt-5">
                <img
                  src={HeadphoneImg}
                  alt="Headphones Image"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row">
                <div className="col-12 col-lg-4 mt-5">
                  <img
                    src={VR1}
                    alt="VR Img"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-12 col-lg-4 mt-5">
                  <img
                    src={VR2}
                    alt="VR Image"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
