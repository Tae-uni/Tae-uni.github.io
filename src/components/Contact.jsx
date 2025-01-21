import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";

import { CONTACT } from "../contents";

const Contact = () => {

  const emailUsername = "taekwon.kim.dev";
  const emailDomain = "gmail.com";

  return (
    <div className="border-b border-neutral-900 pt-28 pb-44">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center">
        {/* email */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center gap-4 font-sans"
        >
          <MdEmail className="text-xl" />
          <a
            href={`mailto:${emailUsername}@${emailDomain}`}
            className="border-b text-cyan-500 hover:text-cyan-300"
          >
            {emailUsername}@{emailDomain}
          </a>
        </motion.div>
        {/* WhatsApp */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-2 items-center gap-4 font-sans"
        >
          <MdWhatsapp className="text-xl" />
          <a
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-300"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
        {/* address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-2 items-center gap-4 font-sans"
        >
          <MdLocationOn className="text-xl" />
          {CONTACT.address}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;