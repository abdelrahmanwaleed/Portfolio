import React from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

type Props = {};

const SideMenu = (props: Props) => {
  const [open, isOpen] = React.useState(false);

  return (
    <div
      className="md:hidden cursor-pointer flex flex-col "
      onClick={() => isOpen(!open)}
    >
      <BiMenu className="w-10 h-10" />

      <nav
        className={`${
          open ? "block" : "hidden"
        } fixed animate-open-menu inset-0 w-full origin-top flex flex-col justify-center items-center bg-blue-200 `}
      >
        <ul>
          <li>
            <Link href="#about">
              <button className=" mobilemenu">
                <span className="spanMenu">About</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="#experience">
              <button className="mobilemenu">
                <span className="spanMenu">Experience</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <button className="mobilemenu">
                <span className="spanMenu">Skills</span>
              </button>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <button className="mobilemenu">
                <span className="spanMenu">Projects</span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
