import Image from "next/image";
import React from "react";

const ProfilePhoto = () => {
  return (
    <>
      <Image
        className="h-[200px] w-[150px] sm:h-[300px] sm:w-[225px] md:w-[300px] md:h-[400px] object-cover rounded-md"
        width={300}
        height={400}
        src="/index.jpg"
        alt="Guilherme Lopes"
      />
    </>
  );
};

export default ProfilePhoto;
