import Link from "next/link";

const MyWorkLink = () => {
  return (
    <span className="block md:text-lg font-semibold mt-10 sm:text-right">
      Veja mais sobre{" "}
      <Link
        className="bg-transparent font-normal px-1 text-primary100 font-monospace rounded-sm hover:bg-primary100 hover:text-black transition-all"
        href="/main/projects"
      >
        &lt;meu trabalho&gt;
      </Link>
    </span>
  );
};

export default MyWorkLink;
