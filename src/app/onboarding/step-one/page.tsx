"use client";
import BigComConnect from "@/app/shared/bigComConnect";
import { useState } from "react";

const StepOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>StepOne</button>
      <BigComConnect isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default StepOne;
