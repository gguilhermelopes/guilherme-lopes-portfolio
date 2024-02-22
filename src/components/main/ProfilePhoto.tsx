import Image from "next/image";
import React from "react";

const ProfilePhoto = () => {
  return (
    <Image
      className="h-[200px] w-[150px] sm:h-[300px] sm:w-[225px] md:w-[300px] md:h-[400px] object-cover rounded-md"
      width={600}
      height={800}
      src="/index.png"
      alt="Guilherme Lopes"
      priority
    />
  );
};

export default ProfilePhoto;
