import Main from "@src/components/landing/Main";
import Quote from "@src/components/landing/Quote";
import Projects from "@src/components/landing/Projects";
import Skills from "@src/components/landing/Skills";
import React from "react";
import About from "@src/components/landing/About";

const Landing: React.FC = () => {
    return (
        <div className="landing">
            <Main />
            <Quote />
            <Projects />
            <Skills />
            <About />
        </div>
    )
}

export default Landing;
