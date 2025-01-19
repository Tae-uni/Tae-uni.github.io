import { motion } from "framer-motion";

import profilePic from "../assets/profile_pics.png";
import { MdFileDownload, MdMail } from "react-icons/md";
import { Link } from "react-scroll";
// import { HERO_CONTENT } from "../contents";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mt-36 lg:mb-35">
      <div className="flex flex-col items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center overflow-clip">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="object-cover mt-10 rounded-full"
              width={200}
              height={200}
              src={profilePic} alt="Taekwon profile"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-7 text-4xl font-sans font-semibold tracking-tight mt-10 lg:text-6xl"
            >
              Taekwon Kim
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-12 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-3xl text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-2xl font-slab font-semibold text-neutral-300 text-center"
            >
              Everyday is an opportunity to learn, grow, and improve
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-nowrap gap-x-4 mt-12 mb-20"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="items-center px-5 py-2 text-sm sm:text-lg font-sans font-semibold text-neutral-300 bg-purple-600 rounded-md"
                >
                  <MdMail className="inline-block mr-2 text-lg" />
                  Contact Me
                </motion.button>
              </Link>
              <motion.a
                href="../../public/Taekwon_Kim_Resume.pdf"
                download="Taekwon_Kim_Resume"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-5 py-2 text-sm sm:text-lg font-sans font-semibold text-neutral-300 bg-purple-600 rounded-md"
              >
                <MdFileDownload className="inline-block mr-2 text-lg" />
                Resume
              </motion.a>

            </motion.div>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-2xl py-6 text-lg font-slab leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;