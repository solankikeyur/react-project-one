import React from "react";
import Feature from "./Feature"

const Content = () => {

    const features = [
        {
            title: "Agile Mindset",
            desc: "Agile is not a principal or a method, but it’s an integral part of being Agile that is guided by principles, defined by values and manifested through various practices."
        },
        {
            title: "Our Values",
            desc: "You add value to your customer when you deliver a product or service (and the associated brand experience) that has been designed specifically to solve their problem."
        },
        {
            title: "Our Cultures",
            desc: "Core Team will work as Scrum Team where Team will have quarterly goal to make sure that we run financial, administrative and project management prospective."
        }
    ]

  return (
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Collaborate with a passionate team of designers, developers, and strategists to stand-out from the crowd and shine brighter.
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {
                features.map((feature) => (
                    <Feature title={feature.title} desc={feature.desc}></Feature>
                ))
            }
          
        </div>
      </div>
    </section>
  );
};

export default Content;
