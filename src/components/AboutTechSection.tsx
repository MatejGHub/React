import React from "react";
import aboutImg from "../assets/tech gear/assets/img-1.webp";

const AboutTechSection = () => {
  return (
    <>
      {/* About-tech section */}
      <section className="container py-5">
        <div className="row gx-5">
          <div className="col-12 col-lg-5 mt-5">
            <img
              src={aboutImg}
              alt="vr headset"
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col-12 col-lg-7 mt-5 d-inline-block">
            <h1 className="text-primary fs-1 fw-bold mb-3">About tech hub</h1>
            <p className="fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              adipisci praesentium, modi quas cupiditate beatae reprehenderit
              aliquid quasi dolore maxime error assumenda quos delectus iure
              illo corrupti voluptates harum repudiandae ad doloribus a ullam
              aspernatur? Magnam, aspernatur voluptates est autem ab adipisci
              quo minima minus nam neque asperiores, nostrum ad dolorum
              repudiandae molestias officia eligendi dicta eaque ullam, odit
            </p>
            <p className="fs-6">
              consectetur voluptatem aperiam doloremque! Aliquam sed esse odio
              architecto consequuntur, a officiis qui velit nemo tempore natus
              magni veritatis eos perspiciatis animi quia ipsum, tempora illo
              amet placeat eveniet minima, nihil est officia? Nisi distinctio
              quisquam numquam non tempore similique nulla?0
            </p>
            <button className="btn btn-primary p-3 fs-6 fw-bold mt-3">
              Read more about us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTechSection;
