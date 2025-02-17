// next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from "framer-motion";

import {fadeIn} from '../variants';




const Home = () => {
  return (
  <div className="bg-primary/60 h-full">
  {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        {/* title */}
        <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className="h1">
        Building the <br />Future{' '} 
        <span className="text-accent">One line of code at a time</span>
        </motion.h1>
        {/* subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
        I am a software engineer who is passionate about creating innovative solutions that make a difference. 
        I believe that software is the key to building a better future, and I am committed to using my skills to make that happen. 
        I am always learning new things and pushing the boundaries of what is possible. 
        I am excited to see what the future holds, and I am confident that I can play a role in shaping it.
        </motion.p>
        {/* btn */}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex">
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    {/* image */} 
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      {/* bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        
      </div>
      {/* particles */}
    <ParticlesContainer />
      {/* avatar img */}
      <motion.div variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' translation={{duration:1, ease: 'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>
  );
};

export default Home;




