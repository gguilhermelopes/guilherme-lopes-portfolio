import TextDetails from "../UI/TextDetails";

const AboutPresentation = () => {
  return (
    <>
      <h1 className="font-bold text-lg leading-5 sm:text-3xl sm:leading-7 md:text-4xl md:leading-9">
        Olá! 👋 <br />
        Me chamo <TextDetails>Guilherme Lopes</TextDetails>.
      </h1>
      <div className="sm:grid text-pretty sm:grid-cols-[auto_280px] md:grid-cols-[auto_350px] mt-2 md:mt-6 ">
        <p className="md:max-w-[80%] max-w-full text-gray-200 self-center text-xs sm:text-sm md:text-base lg:text-lg leading-3 sm:leading-4 lg:leading-5">
          Sou um <TextDetails>desenvolvedor de software e web</TextDetails>{" "}
          graduado em Engenharia Eletrônica e com experiência sólida em projetos
          de desenvolvimento. Altamente dedicado à criação de soluções
          eficientes, bem como interfaces funcionais. Especializado em
          tecnologias como <TextDetails>Python</TextDetails>,{" "}
          <TextDetails>Java</TextDetails>, <TextDetails>JavaScript</TextDetails>
          , <TextDetails>TypeScript</TextDetails>,{" "}
          <TextDetails>React</TextDetails>, <TextDetails>Next</TextDetails>,{" "}
          <TextDetails>CSS</TextDetails>, <TextDetails>Tailwind</TextDetails> e
          com habilidades práticas no consumo e criação de{" "}
          <TextDetails>REST APIs</TextDetails>.
          <span className="mt-4 block">
            Minha jornada na programação começou há mais de{" "}
            <TextDetails>dois anos</TextDetails>, quando decidi me aprofundar em
            uma linguagem, o <TextDetails>JavaScript</TextDetails>. Desde então,
            houve uma grande <TextDetails>evolução</TextDetails>, muito devido
            ao meu <TextDetails>comprometimento</TextDetails> e{" "}
            <TextDetails>facilidade de aprendizado</TextDetails>. Trabalhei com
            muitas <TextDetails>linguagens</TextDetails> e{" "}
            <TextDetails>ferramentas</TextDetails>, realizei{" "}
            <TextDetails>cursos</TextDetails>, desenvolvi projetos de forma{" "}
            <TextDetails>independente</TextDetails>, atuei como desenvolvedor{" "}
            <TextDetails>voluntário</TextDetails> e atualmente presto serviços
            como <TextDetails>freelancer</TextDetails>, tudo com o objetivo de
            me <TextDetails>capacitar</TextDetails> cada vez mais e entender os
            processos deste mundo profissional.
          </span>
        </p>
        <h2 className="uppercase font-extrabold hidden sm:block sm:text-6xl md:text-7xl text-white/20 text-right place-self-center">
          Quem <br /> sou <br />
          eu?
        </h2>
      </div>
    </>
  );
};

export default AboutPresentation;
