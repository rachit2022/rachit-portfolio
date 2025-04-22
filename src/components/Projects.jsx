import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={170}
                height={170}
                alt={project.title}
                className=" mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">
                {project.description + " "}
              </p>
              <a
                className="mr-3 inline-block rounded-full border border-purple-700 bg-purple-900/90 px-3 py-1 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-purple-800 hover:shadow-md"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 inline-block rounded-full border border-purple-800 bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400 transition duration-200 hover:bg-purple-900 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
