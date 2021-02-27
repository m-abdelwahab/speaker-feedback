import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../images/5-stars.json";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,

  animationData: animationData.default,
};

const Hero = () => {
  return (
    <section className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="lg:w-2/6 md:w-3/6 w-5/6 object-cover object-center rounded">
        <Lottie options={defaultOptions} height={200} width={400} />
      </div>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Getting Feedback Has Never been This Easy
        </h1>
        <div className="mb-8 leading-relaxed">
          Create an event and share the link with your audience to get their
          feedback
        </div>
        <div className="flex justify-center">
          <Link to="/events">
            <button className="btn inline-flex text-white btn btn:hover rounded text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
