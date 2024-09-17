import AnimateLeftIn from "../UI/AnimateLeftIn";
import Hello from "./Hello";
import Title from "./Title";

const MainPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-8 max-w-screen-xl mx-auto">
        <Hello />
        <Title />
      </main>
    </AnimateLeftIn>
  );
};

export default MainPage;
