import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/brahmeswar.png";

const card =
  "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur lg:p-8 p-4 overflow-hidden";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export default function About() {
  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Full Stack", value: "Expert" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[160px] delay-500",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden lg:py-24 py-12 px-6"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097] ${c}`}
            animate={{
              y: [0, 20, 0],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-12">

        <motion.div
          className="relative group"
          {...fadeUp(0)}
        >
          {/* Animated background glows behind the image */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600 rounded-full"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>

          <div className="w-64 h-[380px] md:w-80 md:h-[480px] rounded-3xl p-1 bg-gradient-to-r from-[#1580de] via-[#22217f] to-[#692097] shadow-2xl relative z-10">
            <div className="w-full h-full rounded-[1.4rem] overflow-hidden border-4 border-black bg-gray-900">
              <img
                src={profileImg}
                alt="Kokkanti Brahmeswar Reddy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#302b63] to-[#692097] p-4 rounded-full shadow-lg border border-white/20 z-20">
            <span className="text-2xl">👨‍💻</span>
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col gap-6 w-full">
          <motion.div
            className={`${card} text-center`}
            {...fadeUp(0.1)}
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Kokkanti Brahmeswar Reddy
              </h2>
              <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
                Full Stack Developer
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Full Stack Developer with experience delivering enterprise-grade
              applications in Agile teams. Specialised in React and
              TypeScript, with hands-on experience in application migration,
              analytics dashboards, accessibility compliance, and cross-team
              feature delivery in government and healthcare domains.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full text-sm font-semibold text-white
                           bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097]
                           transition-all shadow-xl"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full text-sm font-semibold text-white
                           border border-[#692097]/60 bg-white/5
                           hover:bg-[#692097]/20 hover:border-[#692097] transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className={`${card} flex items-center justify-around py-8`}
              {...fadeUp(0.2)}
            >
              {stats.map((s, i) => (
                <div key={i} className="text-center px-4">
                  <p className="text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className={`${card} flex items-center gap-6`}
              {...fadeUp(0.25)}
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#302b63] to-[#692097] text-2xl shadow-lg border border-white/10">
                🎓
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                  Education
                </p>
                <p className="text-lg font-bold text-white leading-tight">
                  Bachelor of engineering
                </p>
                <p className="text-sm text-gray-400">EPCET under VTU</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
