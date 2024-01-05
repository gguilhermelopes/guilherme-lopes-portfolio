import TextDetails from "@/components/UI/TextDetails";
import React from "react";

const MyName = () => {
  return (
    <h2 className="self-end uppercase leading-5 sm:leading-none font-bold text-2xl sm:text-4xl md:text-5xl">
      Guilherme <br />
      <TextDetails>Lopes</TextDetails>
    </h2>
  );
};

export default MyName;
