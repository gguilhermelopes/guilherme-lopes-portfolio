import Navbar from "./Navbar";
import Presentation from "./Presentation";

const Header = () => {
  return (
    <header className="uppercase flex justify-between">
      <Navbar />
      <Presentation />
    </header>
  );
};

export default Header;
