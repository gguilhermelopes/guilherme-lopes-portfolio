import AnimateLeftIn from "../UI/AnimateLeftIn";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsList from "./ProjectsList";

const ProjectsPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8 max-w-screen-xl mx-auto">
        <ProjectsTitle />
        <ProjectsList />
      </main>
    </AnimateLeftIn>
  );
};

export default ProjectsPage;
