import Hello from "./Hello";
import Title from "./Title";
import MainFooter from "./MainFooter";

const MainPage = () => {
  return (
    <>
      <main>
        <Hello />
        <Title />
      </main>
      <MainFooter />
    </>
  );
};

export default MainPage;
