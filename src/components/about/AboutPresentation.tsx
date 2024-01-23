import TextDetails from "../UI/TextDetails";

const AboutPresentation = () => {
  return (
    <>
      <h1 className="font-bold text-lg sm:text-3xl md:text-4xl">
        Olá! 👋 <br />
        Me chamo <TextDetails>Guilherme Lopes</TextDetails>.
      </h1>
      <div className="sm:grid sm:grid-cols-[auto_280px] md:grid-cols-[auto_350px] mt-2 md:mt-6">
        <p className="max-w-[95%] self-center text-xs sm:text-sm md:text-base lg:text-lg">
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
          <span className="mt-1 block">
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
          </span>
        </p>
        <h2 className="uppercase font-extrabold hidden sm:block sm:text-6xl md:text-7xl text-white/30 text-right place-self-center">
          Quem <br /> sou <br />
          eu?
        </h2>
      </div>
    </>
  );
};

export default AboutPresentation;
