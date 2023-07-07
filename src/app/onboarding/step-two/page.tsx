import React from "react";

const StepTwo = () => {
  return (
    <div className=" w-screen h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-4 gap-2 bg-white p-5 shadow-lg">
        {[1, 2, 3, 4].map((el) => (
          <div className="w-full bg-gray-100 p-2 border rounded-sm border-gray-200" key={el}>
            Hello
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
