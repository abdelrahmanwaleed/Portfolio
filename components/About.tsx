import React from "react";
import Image from "next/image";
import img2 from "../public/Me.jpg";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-col
        xl:flex-row  max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#00FF00] ">
        About
      </h3>

      <motion.div
        className="xl:flex-row mx-auto"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 shadow-inner flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-3xl md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          src={img2}
          alt="/"
        ></Image>
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 xl:w-[900px]">
        <h4 className="text-5xl font-Sono">Who Am I ?</h4>
        <p className="text-[1.5rem] font-Rubik">
          Hi, I&apos;m Abdelrahman or you can call me Abdo. I was born in Egypt and
          lived with my family in Saudi Arabia where I had my education. After
          finishing high school I returned to Egypt where I got my Software
          Engineer bachelor&apos;s certificate. I have worked on multiple projects
          during college duration and army services that required several
          skills. I like to discover new challenges and come up with the most
          creative and new solutions also love to go through new software to
          gain more experience. Since my childhood, there was a growing love
          towards the videogames and art which came up with a fascination to
          know how this world goes so I devoted myself to learning 3D modeling.
          Due to this boundless history in graphic and web development, I became
          a versatile web developer. I admire the combined effort and see the
          workflow come with a payoff.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
