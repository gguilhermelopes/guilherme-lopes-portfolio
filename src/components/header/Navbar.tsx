"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "./mobile-menu/MenuIcon";
import { useEffect, useState } from "react";
import MenuMobile from "./mobile-menu/MenuMobile";

export const navContent = [
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
  const [isMenuMobileOpened, setIsMenuMobileOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuMobileOpened(false);
    toggleBodyScroll(true);
  }, [pathname]);

  const toggleBodyScroll = (shouldEnableScroll: boolean) => {
    if (shouldEnableScroll) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  const handleMenuToggleClick = () => {
    setIsMenuMobileOpened(true);
    toggleBodyScroll(false);
  };

  return (
    <nav>
      <ul className="hidden lg:flex gap-10">
        {navContent.map((item) => (
          <li key={item.label}>
            <Link
              className="font-bold transition-all self-start hover:text-primary100"
              href={item.href}
            >
              {item.label}
              {(item.href === pathname ||
                (pathname.startsWith(item.href) && item.href !== "/main")) && (
                <span
                  className="mt-1 w-0 h-[2px] block bg-primary100 animate-left-to-full"
                  aria-hidden
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      <>
        <button className="flex lg:hidden" onClick={handleMenuToggleClick}>
          <MenuIcon />
        </button>
        {isMenuMobileOpened && (
          <MenuMobile
            setIsMenuMobileOpened={setIsMenuMobileOpened}
            toggleBodyScroll={toggleBodyScroll}
          />
        )}
      </>
    </nav>
  );
};

export default Navbar;
