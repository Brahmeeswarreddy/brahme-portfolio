// src/pages/Footer.jsx

import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kokkanti-brahmeswar-reddy-0b85971b3/",
    },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/917095819645",
    },
  ];

  const glowVariants = {
    initial: { opacity: 0.8, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
    hover: {
      opacity: 1,
      filter:
        "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(45,27,78,0.8))",
    },
    tap: {
      transition: { duration: 0.08 },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-[#000]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(105,32,151,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(21,128,222,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(105,32,151,0.1),transparent_50%)]" />
      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-12 md:py-16 flex flex-col items-center text-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <p className="text-gray-300 text-sm sm:text-base italic">
          Building clean, accessible, and fast web experiences.
        </p>

        <a
          href="mailto:brahmeswarreddy645@gmail.com"
          className="text-purple-600 text-sm hover:text-white transition-colors duration-200"
        >
          brahmeswarreddy645@gmail.com
        </a>

        <div className="flex gap-5 text-2xl md:text-3xl mt-1">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-300 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} Kokkanti Brahmeswar Reddy. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
