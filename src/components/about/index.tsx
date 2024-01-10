import AnimateLeftIn from "../UI/AnimateLeftIn";
import AboutPresentation from "./AboutPresentation";
import AboutSkillList from "./AboutSkillList";
import MyWorkLink from "./MyWorkLink";

const AboutPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-16">
        <AboutPresentation />
        <AboutSkillList />
        <MyWorkLink />
      </main>
    </AnimateLeftIn>
  );
};

export default AboutPage;
