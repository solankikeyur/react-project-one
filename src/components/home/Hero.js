import React from "react";
import HeroImg from ".././../assets/img/hero.webp"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            A LEADER IN AGILE AND LEAN
            <br className="hidden lg:inline-block" />
            SOFTWARE DEVELOPMENT
          </h1>
          <p className="mb-8 leading-relaxed">
          Partner with us to work with on-demand Agile product team. We are always committed to your growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
