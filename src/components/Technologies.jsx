import { RiReactjsLine } from "react-icons/ri";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiDart,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiSpringboot,
  SiPostman,
} from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        variants={iconVariants(2.5)}
        animate="animate"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* C Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-blue-600" />
        </div>
        {/* C++ Icon */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiCplusplus className="text-7xl text-blue-700" />
        </motion.div>
        {/* Java Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-orange-500" />
        </motion.div>
        {/* Python Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-blue-400" />
        </motion.div>
        {/* Dart Icon */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDart className="text-7xl text-blue-500" />
        </motion.div>
        {/* HTML Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>
        {/* CSS Icon */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>
        {/* JavaScript Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>
        {/* MySQL Icon */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-orange-400" />
        </motion.div>
        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        {/* Firebase Icon */}
        <motion.div
          variants={iconVariants(6.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        {/* React Icon */}
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Spring Boot Icon */}
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-500" />
        </motion.div>
        {/* Postman Icon */}
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>
        {/* Git Icon */}
        <motion.div
          variants={iconVariants(8.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGit className="text-7xl text-red-500" />
        </motion.div>
        {/* GitHub Icon */}
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl text-gray-800" />
        </motion.div>
        {/* Pandas Icon */}
        <motion.div
          variants={iconVariants(9.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPandas className="text-7xl text-blue-300" />
        </motion.div>
        {/* NumPy Icon */}
        <motion.div
          variants={iconVariants(10)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNumpy className="text-7xl text-blue-400" />
        </motion.div>
        {/* Scikit-learn Icon */}
        <motion.div
          variants={iconVariants(10.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiScikitlearn className="text-7xl text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
