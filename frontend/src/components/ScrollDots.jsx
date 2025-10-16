import React, { useEffect, useState } from "react";

const ScrollDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;
      let current = 0;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = index;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            index === activeSection ? "bg-yellow-400 scale-125" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default ScrollDots;
