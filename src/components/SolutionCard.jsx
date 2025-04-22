import React from 'react';

const SolutionCard = ({ heading, info, path }) => {
  return (
    <div className="group max-w-xs h-[50vh] bg-white rounded-2xl overflow-hidden transition-all border-4 shadow-2xl hover:scale-[101%]">
      <div className="h-[50%] w-full overflow-hidden">
        <img
          src={path}
          alt="Location"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-1"
        />
      </div>
      <div className="h-[25%] p-5 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {heading}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
