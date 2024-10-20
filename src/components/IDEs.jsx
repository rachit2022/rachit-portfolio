import {
  SiVisualstudiocode,
  SiAndroidstudio,
  SiApachenetbeanside,
  SiAnaconda,
  SiEclipseide,
  SiPycharm,
  SiIntellijidea,
  SiRstudioide,
  SiPostman,
} from "react-icons/si";
import { motion } from "framer-motion";

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

const IDEs = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        IDEs Used
      </motion.h2>
      <motion.div
        variants={iconVariants(2.5)}
        animate="animate"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* VS Code Icon */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiVisualstudiocode className="text-7xl text-blue-500" />
        </motion.div>
        {/* Android Studio Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAndroidstudio className="text-7xl text-green-500" />
        </motion.div>
        {/* NetBeans Icons */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiApachenetbeanside className="text-7xl text-blue-600" />
        </motion.div>
        {/* Anaconda Icon */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAnaconda className="text-7xl text-green-600" />
        </motion.div>
        {/* Eclipse IDE Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiEclipseide className="text-7xl text-purple-600" />
        </motion.div>
        {/* PyCharm Icon */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPycharm className="text-7xl text-green-400" />
        </motion.div>
        {/* IntelliJ IDEA Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiIntellijidea className="text-7xl text-blue-600" />
        </motion.div>
        {/* R Studio Icon */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiRstudioide className="text-7xl text-blue-400" />
        </motion.div>
        {/* Postman Icon */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IDEs;
