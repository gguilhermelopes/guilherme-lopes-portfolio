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
              className={`group relative transition-all self-start hover:text-primary100 ${
                (item.href === pathname ||
                  (pathname.startsWith(item.href) && item.href !== "/main")) &&
                "text-primary100 font-bold"
              }`}
              href={item.href}
            >
              {item.label}
              {(item.href === pathname ||
                (pathname.startsWith(item.href) && item.href !== "/main")) && (
                <span
                  className="absolute -top-12 left-0 w-0 h-[2.5px] bg-primary100 animate-left-to-full group-hover:w-full"
                  aria-hidden
                />
              )}
              <span
                className="absolute -top-12 left-0 w-0 h-[2.5px] bg-primary100  group-hover:w-full transition-all"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
      <>
        <button
          className="flex lg:hidden"
          onClick={handleMenuToggleClick}
          aria-label="Botão de menu"
          type="button"
        >
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
