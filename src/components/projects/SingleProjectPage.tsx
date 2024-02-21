import { IoAlertCircleOutline, IoLockClosedOutline } from "react-icons/io5";
import prismadb from "../../../lib/prismadb";
import AnimateLeftIn from "../UI/AnimateLeftIn";
import GetBackButton from "./GetBackButton";
import ImageSlides from "./ImageSlides";
import Link from "next/link";

const fetchProject = async (id: string) => {
  return await prismadb.project.findUnique({ where: { id } });
};

const SingleProjectPage = async ({ id }: { id: string }) => {
  const project = await fetchProject(id);

  if (!project) return null;
  return (
    <AnimateLeftIn>
      <main className="mt-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-[1.375rem] sm:text-[1.75rem] font-bold text-primary100">
            {project.title}
          </h1>
          <p className="text-xs sm:text-base text-gray-200 leading-4 sm:leading-normal">
            {project.longDescription}
          </p>
          <ul className="flex flex-wrap gap-2 text-black font-bold">
            {project.stack.map((item) => (
              <li
                className="bg-primary100 text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 rounded-sm"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-2 sm:mt-4 text-sm md:text-base flex flex-col gap-2">
            <div className="font-bold">
              Deploy
              {project.deployURL.length ? (
                project.deployURL.map((url) => (
                  <p key={url}>
                    <Link
                      target="_blank"
                      className="font-medium break-words text-primary100 rounded-sm hover:bg-primary100 hover:text-black"
                      href={url}
                    >
                      {url.replace("https://", "")}
                    </Link>
                  </p>
                ))
              ) : (
                <span className="flex items-center gap-2 font-medium">
                  Projeto em andamento
                  <IoAlertCircleOutline color="#FEDA4E" />
                </span>
              )}
            </div>
            <div className="font-bold">
              Repositório{project.repositories.length > 1 && "s"}
              {project.repositories.length ? (
                project.repositories.map((repository) => (
                  <p key={repository}>
                    <Link
                      target="_blank"
                      className="font-medium break-words text-primary100 rounded-sm hover:bg-primary100 hover:text-black"
                      href={repository}
                    >
                      {repository.replace("https://", "")}
                    </Link>
                  </p>
                ))
              ) : (
                <span className="flex items-center gap-2 font-medium">
                  Repositório privado
                  <IoLockClosedOutline color="#FEDA4E" />
                </span>
              )}
            </div>
          </div>
        </div>
        <ImageSlides imageUrls={project?.imgGalleryURLs} />
        <GetBackButton />
      </main>
    </AnimateLeftIn>
  );
};

export default SingleProjectPage;
