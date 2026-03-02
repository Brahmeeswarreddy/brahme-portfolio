import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Ashirvad",
    description:
      "Developed responsive and scalable web applications using HTML, CSS, JavaScript, and SCSS, integrated with WordPress CMS and PHP-based backend functionality. Focused on clean code architecture, performance optimization, cross-browser compatibility, and mobile-first design principles.",
    technologies: ["Html 5", "Css 3", "JavaScript", "Scss", "WordPress"],
    github: null,
    live: "https://www.ashirvad.com/",
  },
  {
    id: 2,
    title: "FSS",
    description:
      "Developed an interactive and visually engaging web interface for this project using advanced CSS animations and Rive file integration. The project focused on delivering smooth animations, dynamic UI transitions, and an enhanced user experience through modern frontend techniques",
    technologies: ["Html 5", "Css 3", "JavaScript", "Rive Animation"],
    github: null,
    live: "https://www.fsstech.com/",
  },
  {
    id: 3,
    title: "Simmr",
    description:
      "Developed the SIMMR project with a focus on modern UI design, smooth CSS-based animations, and dynamic user interactions. The application included a complete product-selling workflow with cart management and checkout functionality. The project emphasized responsive layouts, clean code architecture, and performance optimization to deliver a seamless and engaging e-commerce experience.",
    technologies: ["Html 5", "Css 3", "JavaScript", "scss"],
    github: null,
    live: "https://getsimmr.com/",
  },
  {
    id: 4,
    title: "Neogreen",
    description:
      "Developed the NeoGreens e-commerce site using HTML, SCSS, JavaScript/jQuery, and WordPress with WooCommerce. Created responsive product listings, polished cart and checkout workflows, and dynamic UI enhancements to deliver a seamless shopping experience.",
    technologies: ["Html 5", "Css 3", "JavaScript", "scss", "Wordpress"],
    github: null,
    live: "https://neogreens.com/",
  },
  {
    id: 5,
    title: "Genspark",
    description:
      "Developed the Genspark website frontend using HTML, SCSS, JavaScript, and jQuery, focusing on modern UI design and seamless user interactions. Implemented fully responsive layouts, dynamic components, and smooth CSS-based animations to deliver a clean, engaging, and user-centric web experience across devices.",
    technologies: ["Html 5", "Css 3", "JavaScript", "scss", "Wordpress"],
    github: null,
    live: "https://genspark.net/",
  },
  {
    id: 6,
    title: "Celsior Tech",
    description:
      "Developed the frontend of the Celsior Tech corporate website using HTML, SCSS, and JavaScript/jQuery, delivering responsive layouts, smooth UI interactions, and polished animations for a professional digital experience.",
    technologies: ["Html 5", "Css 3", "JavaScript", "scss"],
    github: null,
    live: "https://celsiortech.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full relative bg-black text-white overflow-hidden lg:py-24 py-16 px-6 md:px-10 lg:px-12"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-90 h-90 opacity-20 blur-[120px] rounded-full bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-105 h-105 opacity-15 blur-[140px] rounded-full bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-55 h-55 opacity-10 blur-[160px] rounded-full bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-semibold text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Selected projects are showcased here, additional completed and ongoing work is available upon request.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
