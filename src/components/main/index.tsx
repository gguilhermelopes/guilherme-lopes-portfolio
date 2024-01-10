import AnimateLeftIn from "../UI/AnimateLeftIn";
import Hello from "./Hello";
import Title from "./Title";

const MainPage = () => {
  return (
    <AnimateLeftIn>
      <main className="mt-16">
        <Hello />
        <Title />
      </main>
    </AnimateLeftIn>
  );
};

export default MainPage;
