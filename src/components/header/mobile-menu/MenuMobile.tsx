"use client";

import { MouseEvent } from "react";
import { navContent } from "../Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MenuMobileProps = {
  onClose: () => void;
};

const MenuMobile = ({ onClose }: MenuMobileProps) => {
  const pathname = usePathname();

  const handleOutsideMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen p-8 lg:hidden backdrop-blur-[2px] z-10"
      onMouseDown={handleOutsideMouseDown}
    >
      <nav className="mt-10 p-6 bg-background200 opacity-0 w-[200px] rounded-md animate-opacity-to-full">
        <ul className="flex flex-col gap-6">
          {navContent.map((item) => (
            <li
              className={`font-normal ${
                pathname === item.href && "text-primary100"
              }`}
              key={item.label}
            >
              <Link href={item.href} onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
