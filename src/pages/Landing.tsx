import Main from "@src/components/landing/Main";
import Quote from "@src/components/landing/Quote";
import Projects from "@src/components/landing/Projects";
import Skills from "@src/components/landing/Skills";
import React from "react";
import About from "@src/components/landing/About";
import Contacts from "@src/components/landing/Contacts";
import { email, telegram } from "@src/config";

const Landing: React.FC = () => {
    return (
        <div className="page-landing">
            <Main />
            <Quote />
            <Projects />
            <Skills />
            <About />
            <Contacts email={email} telegram={telegram} />
        </div>
    )
}

export default Landing;
