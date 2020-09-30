import React, { useState } from "react";
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
  return (
    <div className="landing">
      <nav></nav>
      <div className="all-sections">{SECTIONS[activeSection]}</div>
    </div>
  );
};

export default Landing;
