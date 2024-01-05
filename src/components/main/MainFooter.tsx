import Link from "next/link";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const footerLinks = [
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/gguilhermelopes",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/gguilhermelopes",
  },
];

const MainFooter = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12 sm:mt-24">
      {footerLinks.map((link) => (
        <Link
          className="hover:scale-105 transition-all"
          key={link.href}
          href={link.href}
          target="_blank"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default MainFooter;
