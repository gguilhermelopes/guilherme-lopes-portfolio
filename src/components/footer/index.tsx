import Link from "next/link";
import GithubIcon from "../main/icons/GithubIcon";
import LinkedinIcon from "../main/icons/LinkedinIcon";

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

const Footer = () => {
  return (
    <footer className="flex flex-1 justify-center items-end gap-4 mt-12 sm:mt-24">
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
    </footer>
  );
};

export default Footer;
