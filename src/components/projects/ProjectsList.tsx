import Image from "next/image";
import Link from "next/link";
import prismadb from "../../../lib/prismadb";

const fetchProjects = async () => {
  const projects = await prismadb.project.findMany({
    orderBy: { createdAt: "asc" },
  });
  return projects;
};

const ProjectsList = async () => {
  const projects = await fetchProjects();
  return (
    <ul className="flex flex-col flex-wrap w-full sm:flex-row gap-8 text-primary100 mt-4 sm:mt-8">
      {projects.map((project) => (
        <li
          key={project.title}
          className="flex flex-1 sm:basis-[calc(50%-2rem)] md:basis-[calc(33%-2rem)] max-w-full sm:max-w-[calc(50%-2rem)] md:max-w-[calc(33%-2rem)] transition-all hover:scale-[1.015]"
        >
          <Link
            title="Clique no projeto para descobrir mais"
            className="flex flex-col justify-between gap-2 sm:gap-4 bg-background200 rounded-lg p-4 "
            href={`/main/projects/${project.id}`}
          >
            <span className="flex flex-col gap-2 sm:gap-4">
              <h2 className="font-bold text-lg sm:text-xl">{project.title}</h2>
              <Image
                className="rounded-md"
                alt={`Imagem do ${project.title}`}
                src={`/projects/${project.imgURL}`}
                width={400}
                height={400}
                priority
              />
            </span>
            <span className="flex flex-col gap-2 sm:gap-4">
              <p className="text-xs sm:text-sm text-white leading-3 sm:leading-4 font-semibold self-center text-center max-w-[25ch]">
                {project.shortDescription}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    className="text-xs font-semibold text-black p-1 rounded-sm bg-primary100"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
