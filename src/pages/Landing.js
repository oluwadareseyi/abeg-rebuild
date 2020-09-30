import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const SECTIONS = {
  1: <Section1 />,
  2: <Section2 />,
  3: <Section3 />,
  4: <Section4 />,
  5: <Section5 />,
  6: <Section6 />,
};

const Landing = () => {
  const [activeSection, setActiveSection] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling) return;
      if (e.deltaY > 0) {
        if (activeSection === 6) return;
        setActiveSection(activeSection + 1);
        console.log("scrolling up");
      } else {
        if (activeSection <= 1) return;
        setActiveSection((state) => state - 1);
      }
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, isScrolling]);
  return (
    <div className="landing">
      <nav></nav>
      <AnimatePresence exitBeforeEnter>
        <div className="all-sections">{SECTIONS[activeSection]}</div>
      </AnimatePresence>
    </div>
  );
};

export default Landing;
