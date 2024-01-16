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
    <ul className="flex flex-col sm:flex-row gap-8 text-primary100 mt-4 sm:mt-8">
      {projects.map((project) => (
        <li key={project.title}>
          <Link
            title="Clique no projeto para descobrir mais"
            className="flex flex-col gap-2 sm:gap-4 max-w-[325px] bg-background200 rounded-lg p-4 transition-all hover:scale-[1.015]"
            href={`/main/projects/${project.id}`}
          >
            <h2 className="font-bold text-lg sm:text-xl">{project.title}</h2>
            <Image
              className="rounded-md"
              alt={`Imagem do ${project.title}`}
              src={`/projects/${project.imgURL}`}
              width={325}
              height={325}
              priority
            />
            <p className="text-xs sm:text-sm text-white leading-3 sm:leading-4 font-semibold self-center text-center max-w-[25ch]">
              {project.shortDescription}
            </p>
            <ul className="flex flex-wrap gap-2 self-end">
              {project.stack.map((item) => (
                <li
                  className="text-xs font-semibold text-black p-1 rounded-sm bg-primary100"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;
