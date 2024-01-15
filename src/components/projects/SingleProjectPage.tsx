import Image from "next/image";
import prismadb from "../../../lib/prismadb";
import AnimateLeftIn from "../UI/AnimateLeftIn";
import ImageSildes from "./ImageSildes";

const fetchProject = async (id: string) => {
  return await prismadb.project.findUnique({ where: { id } });
};

const SingleProjectPage = async ({ id }: { id: string }) => {
  const project = await fetchProject(id);

  if (!project) return null;
  return (
    <AnimateLeftIn>
      <main>
        <h1>{project.title}</h1>
        <ImageSildes imageUrls={project?.imgGalleryURLs} />
      </main>
    </AnimateLeftIn>
  );
};

export default SingleProjectPage;
