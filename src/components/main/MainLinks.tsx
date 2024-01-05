import Link from "next/link";

const linksContent = [
  {
    label: "Saiba mais",
    link: "<sobre mim>",
    href: "/main/about",
  },
  {
    label: "Conheça",
    link: "<meu trabalho>",
    href: "/main/projects",
  },
  {
    label: "Entre em",
    link: "<contato>",
    href: "/main/contact",
  },
];

const MainLinks = () => {
  return (
    <nav className="flex-1 self-center flex items-center justify-center">
      <ul className="flex flex-col gap-3 text-[1.125rem]">
        {linksContent.map((item) => (
          <li
            key={item.label}
            className="font-semibold flex items-center gap-2"
          >
            {item.label}{" "}
            <Link
              className="bg-transparent font-normal px-1 text-primary100 font-monospace rounded-sm hover:bg-primary100 hover:text-black transition-all"
              href={item.href}
            >
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainLinks;
