import { motion } from "framer-motion";

import aboutImg from "../assets/about_pic.jpg";
import { ABOUT_CONTENT } from "../contents";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-2/3 lg:w-1/2 lg:p-8 justify-center"
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="about" className="max-w-full rounded-lg shadow-lg" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start mt-7 lg:mt-0">
            {ABOUT_CONTENT.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-xl sm:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;