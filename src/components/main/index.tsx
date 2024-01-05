import Hello from "./Hello";
import Title from "./Title";
import MainFooter from "./MainFooter";

const MainPage = () => {
  return (
    <>
      <main className="mt-16">
        <Hello />
        <Title />
      </main>
      <MainFooter />
    </>
  );
};

export default MainPage;
