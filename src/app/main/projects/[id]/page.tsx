import SingleProjectPage from "@/components/projects/SingleProjectPage";

const ProjectPage = ({ params }: { params: { id: string } }) => {
  return <SingleProjectPage id={params.id} />;
};

export default ProjectPage;
