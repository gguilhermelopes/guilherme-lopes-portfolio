import TextDetails from "../UI/TextDetails";

const AboutPresentation = () => {
  return (
    <>
      <h1 className="font-bold text-lg sm:text-4xl">
        Olá! Me chamo <TextDetails>Guilherme Lopes</TextDetails>.
      </h1>
      <div className="flex flex-col gap-2 mt-2 md:mt-4 text-xs sm:text-base md:text-lg">
        <p className="md:max-w-[47.5%] max-w-[95%] md:text-justify first-letter:text-xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-monospace">
          Sou um <TextDetails>desenvolvedor</TextDetails> graduado em Engenharia
          Eletrônica e com experiência em projetos de desenvolvimento. Altamente
          dedicado à criação de soluções eficientes e escaláveis, bem como
          interfaces funcionais. Sou especializado em tecnologias como{" "}
          <TextDetails>Java</TextDetails>, <TextDetails>Spring</TextDetails>,{" "}
          <TextDetails>JavaScript</TextDetails>,{" "}
          <TextDetails>TypeScript</TextDetails>,{" "}
          <TextDetails>React</TextDetails>, <TextDetails>Next</TextDetails>,{" "}
          <TextDetails>CSS</TextDetails>, <TextDetails>Tailwind</TextDetails> e
          possuo habilidades práticas no consumo e criação de{" "}
          <TextDetails>REST APIs</TextDetails>.
        </p>
        <p className="md:max-w-[47.5%] max-w-[95%] md:text-justify first-letter:text-xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-monospace md:self-end">
          Minha jornada na programação começou há quase{" "}
          <TextDetails>dois anos</TextDetails>, quando decidi me aprofundar em{" "}
          <TextDetails>JavaScript</TextDetails>. Desde então, houve uma grande{" "}
          <TextDetails>evolução</TextDetails>, muito devido ao meu{" "}
          <TextDetails>comprometimento</TextDetails> e{" "}
          <TextDetails>facilidade de aprendizado</TextDetails>. Realizei{" "}
          <TextDetails>cursos</TextDetails>, desenvolvi projetos de forma{" "}
          <TextDetails>independente</TextDetails>, atuei como desenvolvedor{" "}
          <TextDetails>voluntário</TextDetails> e também como{" "}
          <TextDetails>freelancer</TextDetails>, tudo com o objetivo de me{" "}
          <TextDetails>capacitar</TextDetails> cada vez mais e entender os
          processos deste mundo profissional.
        </p>
      </div>
    </>
  );
};

export default AboutPresentation;
