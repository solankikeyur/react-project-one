import React from "react";

const Feature = ({title,desc}) => {
  return (
    <div className="p-4 md:w-1/3 flex">
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Feature;
