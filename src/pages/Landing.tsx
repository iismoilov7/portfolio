import Main from "@src/components/landing/Main";
import Quote from "@src/components/landing/Quote";
import Projects from "@src/components/landing/Projects";
import Skills from "@src/components/common/Skills";
import React from "react";
import About from "@src/components/landing/About";
import Contacts from "@src/components/landing/Contacts";


const Landing: React.FC = () => {
    return (
        <div className="page-landing fade-in">
            <Main />
            <Quote />
            <Projects />
            <Skills showfull={false} />
            <About />
            <Contacts />
        </div>
    )
}

export default Landing;
