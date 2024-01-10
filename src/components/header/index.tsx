import Navbar from "./Navbar";
import Presentation from "./Presentation";

const Header = () => {
  return (
    <header className="uppercase flex justify-between gap-6 mb-4 md:mb-0 z-10">
      <Navbar />
      <Presentation />
    </header>
  );
};

export default Header;
