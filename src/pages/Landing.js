import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
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
    gsap.to(".line-bg", {
      duration: 3,
      x: `-${6.67 * activeSection}%`,
      ease: "Elastic.easeOut",
    });
    const handleScroll = (e) => {
      if (isScrolling) return;
      if (e.deltaY > 0 || e.deltaY === -0) {
        if (activeSection === 6) return;
        setIsScrolling(true);
        setActiveSection(activeSection + 1);
        console.log("scrolling up");
      } else {
        if (activeSection <= 1) return;
        setIsScrolling(true);
        setActiveSection((state) => state - 1);
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 2000);
    };
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection, isScrolling]);
  return (
    <div className="landing">
      <nav></nav>
      <div className="line-bg"></div>
      <AnimatePresence exitBeforeEnter>
        <div className="all-sections">{SECTIONS[activeSection]}</div>
      </AnimatePresence>

      <div className="indicator-con pd-10">
        <div className="inner">
          <div className="balls">
            {[...new Array(6)].map((_, i) => (
              <div
                key={i}
                className={`ball ball-${i + 1} ${
                  i + 1 <= activeSection ? "active" : ""
                } ${1 + i === activeSection ? "active-num" : ""}`}
                data-num={`0${i + 1}`}
              ></div>
            ))}
          </div>

          <div className="line"></div>
          <div
            className="line-scroll"
            style={{ width: `${(activeSection - 1) * 20}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
