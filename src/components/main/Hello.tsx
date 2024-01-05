import TextDetails from "../UI/TextDetails";

const Hello = () => {
  return (
    <span className="text-sm font-monospace">
      <TextDetails>&lt;</TextDetails>hello, world!
      <TextDetails>&gt;</TextDetails>
    </span>
  );
};

export default Hello;
