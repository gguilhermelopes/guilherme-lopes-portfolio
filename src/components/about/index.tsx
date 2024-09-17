import AnimateLeftIn from "../UI/AnimateLeftIn";
import AboutPresentation from "./AboutPresentation";
import AboutSkillList from "./AboutSkillList";
import MyWorkLink from "./MyWorkLink";

const AboutPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8 max-w-screen-xl mx-auto">
        <AboutPresentation />
        <AboutSkillList />
        <MyWorkLink />
      </main>
    </AnimateLeftIn>
  );
};

export default AboutPage;
