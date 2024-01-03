"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navContent = [
  {
    label: "Home",
    href: "/main",
  },
  {
    label: "Sobre mim",
    href: "/main/about",
  },
  {
    label: "Meu trabalho",
    href: "/main/projects",
  },
  {
    label: "Contato",
    href: "/main/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-10">
      {navContent.map((item) => (
        <Link
          className="font-semibold transition-all hover:text-primary100 "
          key={item.label}
          href={item.href}
        >
          {item.label}
          {item.href === pathname && (
            <span
              className="mt-1 w-0 h-[2px] block bg-primary100 animate-left-to-full"
              aria-hidden
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
