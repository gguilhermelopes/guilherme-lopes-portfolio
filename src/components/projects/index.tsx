import Image from "next/image";
import AnimateLeftIn from "../UI/AnimateLeftIn";
import Link from "next/link";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsList from "./ProjectsList";

const ProjectsPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8">
        <ProjectsTitle />
        <ProjectsList />
      </main>
    </AnimateLeftIn>
  );
};

export default ProjectsPage;
