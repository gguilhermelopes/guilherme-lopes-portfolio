"use client";
import TextDetails from "@/components/UI/TextDetails";
import { usePathname } from "next/navigation";

const Presentation = () => {
  const pathname = usePathname();
  return (
    <div className="max-w-full lg:max-w-[380px] text-right">
      <h1 className="font-bold leading-8 md:leading-none text-4xl md:text-5xl lg:text-6xl">
        Software
        <br />
        <TextDetails>Dev</TextDetails>eloper
      </h1>
      {pathname === "/main" && (
        <>
          <p className="text-xs text-gray-300/90 mt-4 font-semibold hidden md:block opacity-0 translate-x-10 animate-opacity-in">
            Desenvolvedor de software <TextDetails>full stack</TextDetails>,
            <br />
            crio interfaces interativas com <TextDetails>
              React
            </TextDetails> e <br />
            sistemas robustos com <TextDetails>Java</TextDetails> e{" "}
            <TextDetails>Spring</TextDetails>.
            <br />
            Apaixonado pelo meu trabalho,
            <br />
            procuro <TextDetails>desafios constantes</TextDetails>.
          </p>
          <p className="text-[.625rem] text-gray-300/90 leading-3 line mt-4 font-semibold md:hidden max-w-[250px] opacity-0 translate-x-10 animate-opacity-in">
            Desenvolvedor de software{" "}
            <span className="text-primary100">full stack</span>, crio interfaces
            interativas com <TextDetails>React</TextDetails> e sistemas robustos
            com <TextDetails>Java</TextDetails> e{" "}
            <TextDetails>Spring</TextDetails>. Apaixonado pelo meu trabalho,
            procuro <TextDetails>desafios constantes</TextDetails>.
          </p>
        </>
      )}
    </div>
  );
};

export default Presentation;
