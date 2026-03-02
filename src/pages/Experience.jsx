import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Redbaton",
    duration: "Feb 2024 – Present",
    description:
      "Successfully delivered 10+ high-impact projects, emphasizing clean code architecture and performance optimization. Gained extensive hands-on experience in building scalable web applications using a modern tech stack, including HTML5, CSS3, JavaScript, WordPress, Next.js, and React.",
    technologies: [
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "React",
      "Next JS",
      "Node JS",
      "Express JS",
      "SQL",
      "WordPress",
      "TypeScript",
      "Redux Toolkit",
      "WCAG",
    ],
  },
];

function Pills({ items }) {
  if (!items?.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full text-xs font-medium text-gray-300
                     bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ExpCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-[12px] lg:p-10 hover:bg-white/[0.08] transition-all duration-300 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-[24px] lg:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {exp.role}
          </h3>
          <p className="text-xl text-purple-200 mt-1 font-medium">{exp.company}</p>
        </div>
        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-semibold tracking-wider text-purple-400">
          {exp.duration}
        </div>
      </div>

      <p className=" text-[16px] lg:text-lg text-gray-300 leading-relaxed md:max-w-4xl">
        {exp.description}
      </p>

      <div className="mt-8">
        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Technologies</h4>
        <Pills items={exp.technologies} />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="w-full lg:py-24 py-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block">
            Experience
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Professional history and key contributions across organization.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ExpCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
