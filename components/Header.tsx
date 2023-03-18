import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import SideMenu from "./SideMenu";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.behance.net/ANwaleed"
          fgColor="green"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/a.waleed22/"
          fgColor="green"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/abdelrahman-waleed-9b528b213/"
          fgColor="green"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://github.com/abdelrahmanwaleed"
          fgColor="green"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="md:flex md:flex-row  items-center"
      >
        <div className="hidden md:block items-centerpt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
        <Link href={"#Contact"}>
          <p className="uppercase  hidden md:inline-flex text-sm text-green-900">
            Get in touch
          </p>
          {/* <div className="flex"> */}
          {/* </div> */}
        </Link>
        <SideMenu />
      </motion.div>
    </header>
  );
};

export default Header;
