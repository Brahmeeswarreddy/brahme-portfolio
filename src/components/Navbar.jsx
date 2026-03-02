import React, { useState, useRef, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export const SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.querySelector(`#${id}`);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-5 z-50 transition-all duration-300 ${isScrolled ? "bg-black/60 backdrop-blur-lg shadow-2xl py-3" : "bg-transparent py-5"
          }`}
      >
        <div className="flex items-center gap-2">
          <a href="#home" className="text-2xl font-bold text-white tracking-tighter">
            BR<span className="text-purple-500">AH</span>ME<span className="text-purple-500">.</span>
          </a>
        </div>

        {/* Desktop Sections */}
        <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? "bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm" : "px-6 py-2"
          }`}>
          <ul className="flex items-center gap-8">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`text-sm font-medium transition-all duration-300 capitalize ${activeSection === id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {id}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#302b63] via-[#37053c] to-[#692097] text-white px-6 py-2 rounded-full font-medium shadow-[0_0_15px_rgba(105,32,151,0.4)] hover:shadow-[0_0_20px_rgba(105,32,151,0.6)] transition-all duration-300 hover:brightness-125"
            >
              Reach Out
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-3xl focus:outline-none hover:text-purple-400 transition-colors"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
