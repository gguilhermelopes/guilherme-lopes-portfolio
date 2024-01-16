import prismadb from "../../../lib/prismadb";
import AnimateLeftIn from "../UI/AnimateLeftIn";
import GetBackButton from "./GetBackButton";
import ImageSlides from "./ImageSlides";

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
          <h1 className="text-[1.375rem] sm:text-[1.75rem] font-bold">
            {project.title}
          </h1>
          <p className="text-xs sm:text-base leading-4 sm:leading-normal">
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
        </div>
        <ImageSlides imageUrls={project?.imgGalleryURLs} />
        <GetBackButton />
      </main>
    </AnimateLeftIn>
  );
};

export default SingleProjectPage;
