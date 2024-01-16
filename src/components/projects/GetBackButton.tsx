"use client";

import { useRouter } from "next/navigation";
import { IoCaretBackOutline } from "react-icons/io5";

const GetBackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex text-sm text-background100 gap-2 items-center justify-center bg-white px-4 py-2 rounded-md absolute top-0 right-0 transition-all hover:bg-primary100"
    >
      <IoCaretBackOutline color="#202020" />
      Voltar
    </button>
  );
};

export default GetBackButton;
