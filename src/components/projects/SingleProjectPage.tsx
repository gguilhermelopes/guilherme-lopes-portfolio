import Image from "next/image";
import prismadb from "../../../lib/prismadb";
import AnimateLeftIn from "../UI/AnimateLeftIn";

const fetchProject = async (id: string) => {
  return await prismadb.project.findUnique({ where: { id } });
};

const SingleProjectPage = async ({ id }: { id: string }) => {
  const project = await fetchProject(id);
  return (
    <AnimateLeftIn>
      <main></main>
    </AnimateLeftIn>
  );
};

export default SingleProjectPage;
